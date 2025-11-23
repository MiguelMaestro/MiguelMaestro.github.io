#!/bin/bash

# Script para crear assets de imagen pendientes para el portfolio
# Autor: Miguel Maestro
# Fecha: 2025-11-23

echo "🎨 Generador de Assets para Portfolio"
echo "======================================"
echo ""

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar que existe profile.png
if [ ! -f "public/profile.png" ]; then
    echo -e "${RED}❌ Error: public/profile.png no encontrado${NC}"
    echo "Por favor, asegúrate de tener una imagen de perfil en public/profile.png"
    exit 1
fi

echo -e "${GREEN}✅ profile.png encontrado${NC}"
echo ""

# Función para verificar si ImageMagick está instalado
check_imagemagick() {
    if ! command -v convert &> /dev/null; then
        echo -e "${YELLOW}⚠️  ImageMagick no está instalado${NC}"
        echo "Instalando ImageMagick..."
        
        if [[ "$OSTYPE" == "linux-gnu"* ]]; then
            sudo apt-get update && sudo apt-get install -y imagemagick
        elif [[ "$OSTYPE" == "darwin"* ]]; then
            brew install imagemagick
        else
            echo -e "${RED}❌ Por favor, instala ImageMagick manualmente${NC}"
            exit 1
        fi
    else
        echo -e "${GREEN}✅ ImageMagick instalado${NC}"
    fi
}

# Verificar ImageMagick
check_imagemagick
echo ""

# Crear directorio de iconos si no existe
mkdir -p public/icons

echo "📦 Generando assets..."
echo ""

# 1. Favicon (32x32)
echo "1️⃣ Generando favicon.ico..."
convert public/profile.png -resize 32x32 -background transparent -gravity center -extent 32x32 public/favicon.ico
echo -e "${GREEN}✅ favicon.ico creado${NC}"

# 2. Apple Touch Icon (180x180)
echo "2️⃣ Generando apple-touch-icon.png..."
convert public/profile.png -resize 180x180 -background transparent -gravity center -extent 180x180 public/apple-touch-icon.png
echo -e "${GREEN}✅ apple-touch-icon.png creado${NC}"

# 3. PWA Icon 192x192
echo "3️⃣ Generando icon-192.png para PWA..."
convert public/profile.png -resize 192x192 -background transparent -gravity center -extent 192x192 public/icon-192.png
echo -e "${GREEN}✅ icon-192.png creado${NC}"

# 4. PWA Icon 512x512
echo "4️⃣ Generando icon-512.png para PWA..."
convert public/profile.png -resize 512x512 -background transparent -gravity center -extent 512x512 public/icon-512.png
echo -e "${GREEN}✅ icon-512.png creado${NC}"

# 5. Open Graph Image (1200x630)
echo "5️⃣ Generando og-image.png para redes sociales..."

# Crear imagen base con gradiente
convert -size 1200x630 \
  gradient:#0ea5e9-#075985 \
  public/icons/og-bg.png

# Añadir perfil y texto
convert public/icons/og-bg.png \
  \( public/profile.png -resize 300x300 \) \
  -gravity west -geometry +100+0 -composite \
  -font Arial-Bold -pointsize 72 -fill white \
  -gravity center -annotate +200-80 "Miguel Maestro" \
  -font Arial -pointsize 36 -fill white \
  -annotate +200+30 "Cloud Engineer & Azure Expert" \
  public/og-image.png

echo -e "${GREEN}✅ og-image.png creado${NC}"

echo ""
echo "======================================"
echo -e "${GREEN}🎉 ¡Todos los assets creados exitosamente!${NC}"
echo ""
echo "📁 Archivos generados:"
echo "  - public/favicon.ico (32x32)"
echo "  - public/apple-touch-icon.png (180x180)"
echo "  - public/icon-192.png (192x192)"
echo "  - public/icon-512.png (512x512)"
echo "  - public/og-image.png (1200x630)"
echo ""
echo "🚀 Ahora puedes hacer deploy con:"
echo "   npm run build"
echo ""

#!/bin/bash

# Script simplificado de build para WSL
echo "🚀 Build Script para Portfolio"
echo "=============================="
echo ""

cd ~/VibeCoding/github_portfolio || exit 1

# Limpiar builds anteriores
echo "🧹 Limpiando builds anteriores..."
rm -rf .next out .next-turbopack 2>/dev/null

echo ""
echo "📦 Ejecutando npm run build..."
echo ""

# Usar npm directamente (usa el de Windows automáticamente en WSL)
npm.cmd run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completado!"
    echo ""
    echo "📊 Verificando salida..."
    if [ -d "out" ]; then
        echo "✅ Directorio 'out' creado correctamente"
        echo ""
        echo "📁 Contenido:"
        ls -lh out/ | head -15
    else
        echo "⚠️  El directorio 'out' no existe. Verifica la configuración."
    fi
else
    echo ""
    echo "❌ Error en el build"
    echo ""
    echo "💡 Solución alternativa: Ejecuta desde PowerShell de Windows:"
    echo "   cd \\\\wsl.localhost\\Ubuntu\\home\\miguelmaestro\\VibeCoding\\github_portfolio"
    echo "   npm run build"
fi

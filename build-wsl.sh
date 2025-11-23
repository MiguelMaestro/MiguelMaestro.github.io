#!/bin/bash

# Script de build para WSL que evita problemas de permisos
# Autor: Miguel Maestro

echo "🚀 Iniciando build optimizado..."
echo ""

# Navegar al directorio del proyecto
cd ~/VibeCoding/github_portfolio || exit 1

# Limpiar build anterior si existe
if [ -d ".next" ]; then
    echo "🧹 Limpiando build anterior..."
    rm -rf .next
fi

if [ -d "out" ]; then
    echo "🧹 Limpiando export anterior..."
    rm -rf out
fi

echo ""
echo "📦 Ejecutando build de Next.js..."
echo ""

# Ejecutar build con node de Windows pero con variables de entorno correctas
NEXT_TELEMETRY_DISABLED=1 node.exe "$(npm.cmd root -g)/next/dist/bin/next" build

BUILD_EXIT_CODE=$?

if [ $BUILD_EXIT_CODE -eq 0 ]; then
    echo ""
    echo "✅ Build completado exitosamente!"
    echo ""
    echo "📁 Archivos generados en: out/"
    echo ""
    echo "🔍 Verificando estructura..."
    ls -lh out/ | head -10
    echo ""
    echo "🎉 ¡Listo para deploy!"
else
    echo ""
    echo "❌ Error en el build (código: $BUILD_EXIT_CODE)"
    exit 1
fi

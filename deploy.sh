#!/usr/bin/env bash
# ==============================================================================
# Script Duplikasi & Deployment Otomatis Landing Page di VPS
# ==============================================================================

set -e

echo "🚀 Memulai Deployment / Duplikasi Landing Page di VPS..."

# Check Docker installation
if ! command -v docker &> /dev/null; then
    echo "⚠️ Docker belum terinstall. Menginstall Docker secara otomatis..."
    curl -fsSL https://get.docker.com | sh
    systemctl enable --now docker
fi

# Check Docker Compose installation
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "⚠️ Docker Compose belum terinstall. Menginstall Docker Compose plugin..."
    apt-get update && apt-get install -y docker-compose-plugin || yum install -y docker-compose-plugin
fi

# Build & Run Container
echo "📦 Building Docker container..."
if docker compose version &> /dev/null; then
    docker compose down || true
    docker compose up -d --build
else
    docker-compose down || true
    docker-compose up -d --build
fi

echo "✅ DEPLOYMENT SUKSES!"
echo "🌐 Landing page Anda sekarang live di http://$(curl -s ifconfig.me)"

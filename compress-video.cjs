const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const inputPath = path.join(__dirname, 'public/imagenes/hero/hero-video.mp4');
const outputPath = path.join(__dirname, 'public/imagenes/hero/hero-video-web.mp4');

console.log('🎬 Iniciando compresión de video...');
console.log(`📍 Input: ${inputPath}`);
console.log(`📍 Output: ${outputPath}`);

if (!fs.existsSync(inputPath)) {
    console.error('❌ Error: No se encuentra el archivo hero-video.mp4');
    process.exit(1);
}

ffmpeg(inputPath)
    .outputOptions([
        '-c:v libx264',      // Codec H.264 (Compatible con todos los navegadores)
        '-crf 28',           // Calidad constante (23-28 es bueno para web)
        '-preset fast',      // Velocidad de compresión
        '-movflags +faststart', // Meta-data al inicio para carga rápida
        '-vf scale=-2:720',  // Escalar a 720p manteniendo ratio (suficiente para fondo)
        '-an'                // Eliminar audio (muted)
    ])
    .on('start', (commandLine) => {
        console.log('⚙️ Comando Ffmpeg:', commandLine);
    })
    .on('progress', (progress) => {
        console.log(`🔄 Procesando: ${progress.percent ? Math.round(progress.percent) : 0}% done`);
    })
    .on('error', (err) => {
        console.error('❌ Error ocurrido: ' + err.message);
    })
    .on('end', () => {
        console.log('✅ ¡Video comprimido con éxito!');
        console.log('📁 Nuevo archivo: public/imagenes/hero/hero-video-web.mp4');

        // Verificar reducción de tamaño
        const statsIn = fs.statSync(inputPath);
        const statsOut = fs.statSync(outputPath);
        console.log(`📊 Tamaño Original: ${(statsIn.size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📊 Tamaño Nuevo: ${(statsOut.size / 1024 / 1024).toFixed(2)} MB`);
    })
    .save(outputPath);

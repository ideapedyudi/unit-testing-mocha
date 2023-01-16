module.exports = {
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: './reports',  // Direktori tempat file laporan disimpan
        reportFilename: 'api-test-report',  // Nama file laporan
        inlineAssets: true, // Opsi untuk menyertakan asset seperti gambar atau CSS dalam file HTML
        reportTitle: 'API Test Report',  // Judul laporan
        reportPageTitle: 'API Test Results'  // Judul halaman laporan
    }
};
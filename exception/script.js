// function setTime() {
//     const header = document.getElementById("header");
//     header.textContent = new Date().toString();
// }

// setInterval(setTime, 5000);
// console.log("Program Finish");

function divide(a, b) {
    try {
        // Memeriksa apakah input berupa angka
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }
        
        // Memeriksa apakah pembagi (b) adalah nol
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol.");
        }
        
        // Melakukan pembagian jika input valid
        return a / b;
    } catch (error) {
        // Menampilkan pesan kesalahan
        console.error("Kesalahan:", error.message);
        return null; // Mengembalikan null jika terjadi kesalahan
    }
}

// Tampilan
console.log(divide(10, 2));  // Output: 5
console.log(divide(10, 0));  // Output: Kesalahan: Tidak bisa membagi dengan nol
console.log(divide(10, 'a')); // Output: Kesalahan: Input harus berupa angka
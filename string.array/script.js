// antrian awal
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

// nabila, Maza, dan Elsi dateng
antrian.push("Nabila");  
antrian.push("Maza");     
antrian.push("Elsi");     

// antrian terakhir gajadi, Elsi pulang
antrian.pop();            // Hapus Elsi dari akhir antrian


// antrian pertama ray sama fiki keluar dh belanja
antrian.shift();          // Hapus Ray dari awal antrian
antrian.shift();          // Hapus Fiki dari awal antrian

// tomi nyerobot antrian di depan
// tomi jadi di awal antrian karna nyrobot
antrian.unshift("Tomi");  

//hasil akhir antrian
console.log(antrian);
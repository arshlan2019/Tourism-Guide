// Sample data for tourist destinations in Uttar Pradesh with descriptions
const destinations = {
    "agra": {
        places: [
            "Taj Mahal",
            "Agra Fort",
            "Fatehpur Sikri",
            "Itmad-ud-Daula",
            "Mehtab Bagh",
            "Akbar's Tomb",
            "Jahangir Mahal"
        ],
        descriptions: [
            "The Taj Mahal is a UNESCO World Heritage site and an iconic symbol of love, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
            "Agra Fort is a historical fort with stunning architecture, which served as the main residence of the Mughal emperors until 1638.",
            "Fatehpur Sikri is a former Mughal city, known for its stunning architecture and the Buland Darwaza, the highest gateway in the world.",
            "Itmad-ud-Daula, often called the 'Baby Taj,' is a beautiful tomb made of white marble and is a precursor to the Taj Mahal.",
            "Mehtab Bagh offers stunning views of the Taj Mahal at sunset and is a great spot for photography.",
            "Akbar's Tomb in Sikandra is the final resting place of Mughal Emperor Akbar and showcases Indo-Islamic architecture.",
            "Jahangir Mahal is a beautiful palace built by Akbar for his favorite wife, showcasing Mughal architectural brilliance."
        ]
    },
    "lucknow": {
        places: [
            "Bara Imambara",
            "Chota Imambara",
            "Rumi Darwaza",
            "Hussainabad Clock Tower",
            "Gomti Riverfront",
            "Dilkusha Kothi",
            "La Martiniere College",
            "Begum Hazrat Mahal Park"
        ],
        descriptions: [
            "Bara Imambara is an architectural marvel built by Nawab Asaf-ud-Daula, known for its central hall, one of the largest in India.",
            "Chota Imambara is a beautiful monument, also known as the 'Imambara of the Shia', featuring intricate decorations and chandeliers.",
            "Rumi Darwaza, an imposing gateway, is a symbol of Awadhi architecture, designed to resemble the Turkish style.",
            "Hussainabad Clock Tower is one of the tallest clock towers in India, built in the 19th century, showcasing Indo-Saracenic architecture.",
            "Gomti Riverfront is a beautiful park along the Gomti River, offering recreational spaces, gardens, and views of the river.",
            "Dilkusha Kothi is a historical palace with lush gardens, perfect for a quiet retreat.",
            "La Martiniere College is an iconic educational institution known for its impressive architecture.",
            "Begum Hazrat Mahal Park is dedicated to the memory of the courageous Begum of Awadh, featuring beautiful gardens and monuments."
        ]
    },
    "varanasi": {
        places: [
            "Kashi Vishwanath Temple",
            "Dashashwamedh Ghat",
            "Sarnath",
            "Manikarnika Ghat",
            "Tulsi Manas Temple",
            "Kedar Ghat",
            "Assi Ghat",
            "Bharat Kala Bhavan",
            "Banaras Hindu University",
            "Ramnagar Fort"
        ],
        descriptions: [
            "Kashi Vishwanath Temple is one of the most revered temples dedicated to Lord Shiva, attracting millions of pilgrims each year.",
            "Dashashwamedh Ghat is a prominent ghat on the banks of the Ganges, famous for its Ganga Aarti ceremony held every evening.",
            "Sarnath is an important Buddhist pilgrimage site, where Lord Buddha delivered his first sermon after enlightenment.",
            "Manikarnika Ghat is one of the oldest ghats in Varanasi and a significant cremation site, symbolizing the cycle of life and death.",
            "Tulsi Manas Temple is dedicated to Lord Rama, built in the 1960s, featuring beautiful carvings and inscriptions from the Ramcharitmanas.",
            "Kedar Ghat is famous for its serene environment and beautiful temples along the Ganges.",
            "Assi Ghat is a popular ghat for tourists, known for its evening aarti and vibrant atmosphere.",
            "Bharat Kala Bhavan is an art and archaeological museum showcasing a rich collection of artifacts and paintings.",
            "Banaras Hindu University(BHU) is one of the oldest and largest residential universities in Asia, known for its beautiful campus.",
            "Ramnagar Fort is a historical fort located on the banks of the Ganges, known for its unique architecture and rich history."
        ]
    },
    "kanpur": {
        places: [
            "Allen Forest Zoo",
            "Moti Jheel",
            "Nana Rao Park",
            "Kanpur Memorial Church",
            "Phool Bagh",
            "ISKCON Kanpur",
            "Cawnpore Races",
            "Ganga Barrage"
        ],
        descriptions: [
            "Allen Forest Zoo is one of the largest zoos in North India, home to a variety of species, and set within a lush green environment.",
            "Moti Jheel is a popular lake and park, ideal for picnics and leisurely walks, offering boating facilities and scenic views.",
            "Nana Rao Park is a historical park commemorating the freedom struggle, featuring lush greenery and a peaceful environment.",
            "Kanpur Memorial Church, built in memory of soldiers who died in the 1857 uprising, showcases beautiful Gothic architecture.",
            "Phool Bagh is a picturesque garden with fountains and flowers, perfect for relaxation and family outings.",
            "ISKCON Kanpur is a temple dedicated to Lord Krishna, known for its spiritual activities and festivals.",
            "Cawnpore Races is a popular event for horse racing enthusiasts, offering entertainment and excitement.",
            "Ganga Barrage is a dam on the Ganges River, offering stunning views and recreational activities."
        ]
    },
    "mathura": {
        places: [
            "Krishna Janmabhoomi",
            "Vishram Ghat",
            "Govardhan Hill",
            "Dwarkadhish Temple",
            "Mathura Museum",
            "Brahma Sarovar",
            "Radha Kund",
            "Gita Mandir"
        ],
        descriptions: [
            "Krishna Janmabhoomi is the birthplace of Lord Krishna, featuring a temple complex that attracts numerous devotees and tourists.",
            "Vishram Ghat is a sacred bathing ghat on the Yamuna River, known for its tranquil atmosphere and religious significance.",
            "Govardhan Hill is a sacred hill associated with Lord Krishna, attracting pilgrims and offering beautiful views of the surrounding area.",
            "Dwarkadhish Temple is a renowned temple dedicated to Lord Krishna, showcasing intricate architecture and vibrant festivities.",
            "Mathura Museum houses a rich collection of artifacts and sculptures related to the history of Mathura and its religious significance.",
            "Brahma Sarovar is a sacred water body, considered holy by Hindus, where pilgrims come to take a dip.",
            "Radha Kund is a significant site for followers of Lord Krishna, known for its religious importance and beautiful surroundings.",
            "Gita Mandir is dedicated to the Bhagavad Gita and features beautiful carvings and inscriptions."
        ]
    },
    "gorakhpur": {
        places: [
            "Gorakhnath Temple",
            "Ramgarh Taal",
            "Buddh Park",
            "Geeta Press",
            "Gorakhpur Railway Station",
            "Gorakhpur Zoo",
            "Nawabganj Bird Sanctuary"
        ],
        descriptions: [
            "Gorakhnath Temple is a famous temple dedicated to Guru Gorakhnath, attracting numerous devotees and known for its beautiful architecture.",
            "Ramgarh Taal is a picturesque lake surrounded by gardens, ideal for picnics, boating, and enjoying the natural beauty.",
            "Buddh Park is a well-maintained park featuring a statue of Buddha, offering a serene environment for meditation and relaxation.",
            "Geeta Press is a prominent publisher of Hindu religious texts, known for its contribution to spreading spiritual literature.",
            "Gorakhpur Railway Station is an important railway hub with a historical significance and modern facilities.",
            "Gorakhpur Zoo is home to a variety of animals and is a popular destination for families.",
            "Nawabganj Bird Sanctuary is a popular bird sanctuary that is home to various migratory and resident bird species, perfect for birdwatching."
        ]
    },
    "noida": {
        places: [
            "Worlds of Wonder",
            "The Great India Place",
            "ISKCON Noida",
            "Noida Golf Course",
            "Okhla Bird Sanctuary",
            "Botanical Garden",
            "Sector 18 Market",
            "Film City",
            "St. Mary’s Church",
            "Shree Jagannath Temple"
        ],
        descriptions: [
            "Worlds of Wonder is a popular amusement park offering thrilling rides, water slides, and fun activities for families and children.",
            "The Great India Place is a large shopping mall featuring a variety of shops, restaurants, and entertainment options.",
            "ISKCON Noida is a beautiful temple dedicated to Lord Krishna, known for its peaceful ambiance and spiritual activities.",
            "Noida Golf Course is a lush green golf course offering recreational facilities and scenic views of the landscape.",
            "Okhla Bird Sanctuary is a haven for bird watchers, home to numerous species of migratory and resident birds, ideal for nature lovers.",
            "Botanical Garden is a well-maintained garden featuring a variety of plants, making it a peaceful retreat.",
            "Sector 18 Market is a bustling commercial area with shops, cafes, and entertainment options.",
            "Film City is a hub for the film industry in Noida, where various shoots and events take place.",
            "St. Mary’s Church is a historical church known for its beautiful architecture and serene atmosphere.",
            "Shree Jagannath Temple is a vibrant temple known for its intricate carvings and annual Rath Yatra festival."
        ]
    },
    "bareilly": {
        places: [
            "Alakhnath Temple",
            "Bareilly Fort",
            "Fun City",
            "Dargah of Ala Hazrat",
            "Nawabganj Bird Sanctuary",
            "Raja Jhangir Kachwaha Palace",
            "Lalitpur Kachori Gali",
            "Badaun Fort",
            "Nehru Garden",
            "Brahmapuri"
        ],
        descriptions: [
            "Alakhnath Temple is a revered temple dedicated to Lord Hanuman, known for its stunning architecture and peaceful surroundings.",
            "Bareilly Fort is a historical fort with rich heritage, offering a glimpse into the region's history and architecture.",
            "Fun City is an amusement park with various rides and attractions, making it a popular destination for families.",
            "Dargah of Ala Hazrat is a famous pilgrimage site, attracting visitors for its spiritual significance and beautiful architecture.",
            "Nawabganj Bird Sanctuary is a popular bird sanctuary that is home to various migratory and resident bird species, perfect for birdwatching.",
            "Raja Jhangir Kachwaha Palace is a historical site showcasing the architectural grandeur of its time.",
            "Lalitpur Kachori Gali is famous for its delicious local street food, offering a taste of Bareilly's culinary delights.",
            "Badaun Fort is an ancient fort offering historical insights and picturesque views.",
            "Nehru Garden is a beautiful park with lush greenery, ideal for family outings.",
            "Brahmapuri is a local area known for its cultural significance and local festivals."
        ]
    },
    "allahabad": {
        places: [
            "Khusro Bagh",
            "Allahabad Fort",
            "Allahabad Museum",
            "Jawahar Planetarium",
            "All Saints Cathedral (Patthar Girja)",
            "Anand Bhavan",
            "Swaraj Bhawan",
            "Triveni Sangam",
            "Nagvasuki Temple",
            "Alopi Devi Mandir"
        ],
        descriptions: [
            "Khusro Bagh is a large walled garden containing the tombs of Khusrau Mirza (son of Emperor Jahangir), his mother, and his sister. The tombs are fine examples of Mughal architecture and the garden offers a peaceful environment for visitors.",
            "Built by Emperor Akbar in 1583, Allahabad Fort is a majestic structure that stands along the banks of the Yamuna River. It is known for its massive walls, beautiful architecture, and the famous Ashoka Pillar located inside the fort. While a part of it is used by the Indian Army, some areas are open to tourists.",
            "Allahabad Museum is one of the prominent museums in India, showcasing a rich collection of sculptures, artifacts, and historical documents. The museum offers insights into the cultural and political history of India, with sections dedicated to archaeology, natural history, and paintings.",
            "Located next to Anand Bhavan, Jawahar Planetarium offers a glimpse into the world of astronomy. It features shows on celestial bodies, space, and the universe, making it a great spot for kids and space enthusiasts.",
            "All Saints Cathedral is a Gothic-style church built in the 19th century by the British. It is also known as 'Patthar Girja' (Stone Church) due to its stunning sandstone structure. The cathedral is one of the finest examples of colonial-era architecture in India.",
            "Anand Bhavan is the ancestral home of the Nehru family, which has now been converted into a museum. The museum displays memorabilia of the Nehru-Gandhi family, showcasing their role in India's independence movement. It also has Jawaharlal Nehru's personal library and other artifacts from the time.",
            "Adjacent to Anand Bhavan, Swaraj Bhawan is another mansion owned by the Nehru family. This building was once the headquarters of the Indian National Congress and now serves as a museum. It is a great place to learn about the Indian freedom struggle.",
            "Triveni Sangam is the confluence of three rivers: the Ganges, Yamuna, and the mythical Saraswati. It is a sacred spot for Hindus and a popular destination during the Kumbh Mela. Pilgrims come here to take a holy dip, believing it cleanses them of their sins.",
            "Located near the banks of the Ganges, Nagvasuki Temple is dedicated to Vasuki, the king of serpents in Hindu mythology. It is particularly crowded during Nag Panchami when devotees flock to offer prayers.",
            "Alopi Devi Mandir is a unique temple dedicated to the goddess Alopi Devi, believed to be a form of Goddess Sati. Unlike other temples, there is no deity here, but rather a wooden platform, making it an interesting spot for devotees and tourists alike."
        ]
    },
    "jhansi": {
        places: [
            "Jhansi Fort",
            "Rani Mahal"
        ],
        descriptions: [
            "A symbol of bravery, this fort was an important site during the 1857 Indian Rebellion.",
            "The palace of Rani Lakshmibai, now a museum."
        ]
    },
    "kushinagar": {
        places: [
            "Mahaparinirvana Temple",
            "Ramabhar stupa"
        ],
        descriptions: [
            "The place where Lord Buddha attained Mahaparinirvana (salvation).",
            "The cremation site of Lord Buddha."
        ]
    },
    "mirzapur": {
        places: [
            "Kantit sharif",
            "Vindhyavasini Devi Temple",
            "Vindham falls",
            "Ashtabhuja Devi Temple",
            "Sirsi dam",
            "Tanda Falls",
            "Chunar Fort",
            "Sita Kund",
            "Lakhaniya Dari Waterfall",
            "Vijaygarh Fort",
            "Ghanta Ghar"
        ],
        descriptions: [
            "A well-known Sufi shrine, this dargah is located in Kantit and is dedicated to Maulana Ismail Chisti. It is a place of harmony and attracts people of all faiths who come here to seek blessings.",
            "A highly revered temple dedicated to Goddess Vindhyavasini, located on the banks of the Ganges River. It is a significant pilgrimage site for devotees, especially during Navratri.",
            "One of the most famous waterfalls in Mirzapur, located amid dense forests. The waterfall, named after British Collector Wyndham, offers a great escape into nature and is ideal for picnicking and photography.",
            "Situated on a hilltop, this temple is dedicated to Goddess Ashtabhuja, another form of the Mother Goddess.",
            "A picturesque spot where one can enjoy the tranquil views of water and the surrounding natural beauty. It’s a peaceful location ideal for relaxation and picnics.",
            "A beautiful waterfall surrounded by lush greenery, Tanda Falls is a popular picnic spot and a perfect place for nature lovers. The natural beauty of the cascading water, especially during the monsoon, makes it a must-visit.",
            "A historical fort located on the banks of the Ganges, dating back to ancient times. It has seen the reign of various dynasties, from the Mauryan to the Mughals and the British. The fort is also associated with legends about Emperor Sher Shah Suri and King Vikramaditya.",
            "A holy water tank believed to be associated with Goddess Sita from the Ramayana. Devotees believe that taking a dip here purifies the soul and removes sins.",
            "Another scenic waterfall located near Mirzapur, it’s an excellent spot for trekking and enjoying the natural landscape. The waterfall is surrounded by hills and forests, providing a serene escape for nature enthusiasts.",
            "Situated in the hilly terrain of the Vindhya Range, this fort is famous for its historical significance and architectural grandeur. It is believed to have been built by King Vishwamitra. The fort offers a stunning view of the surrounding landscape and is also associated with ancient folklore.",
            "Located in the heart of Mirzapur, this clock tower is a significant landmark in the city and a popular meeting spot for locals and tourists alike."
        ]
    },
    "chandauli": {
        places: [
            "Latif Shah Dam",
            "Rajdari Waterfall",
            "Devdari Waterfall",
            "Chandraprabha Wildlife Sanctuary",
            "Musakhand Dam",
            "Baba Kinaram Ashram"
        ],
        descriptions: [
            "A scenic dam located near the Chandraprabha River, the Latif Shah Dam offers a peaceful environment and is surrounded by natural beauty. It's a good spot for picnics and nature walks.",
            "Another stunning waterfall located in the Chandraprabha Wildlife Sanctuary, Rajdari Waterfall is larger than Devdari and is popular among tourists for its serene environment. It's a great spot for picnics and treks.",
            "Located in the Chandraprabha Wildlife Sanctuary, Devdari Waterfall is a scenic natural attraction. The waterfall, with a height of around 58 meters, is surrounded by lush greenery and is an excellent spot for nature lovers and photographers.",
            "Situated in the Vindhya mountain range, the Chandraprabha Wildlife Sanctuary is home to diverse flora and fauna. Visitors can spot animals like leopards, sambar deer, and chinkaras, along with a variety of birds. The sanctuary also has waterfalls like Rajdari and Devdari, which add to the scenic beauty.",
            "Musakhand Dam is a lesser-known but scenic location situated near Chakia in the Chandauli district of Uttar Pradesh. It is primarily used for irrigation purposes, but the dam has become a serene spot for nature lovers and those seeking a quiet retreat. Here’s what makes it notable.",
            "Kinaram Ashram is a significant spiritual and cultural site located in Ramgarh in the Chandauli district of Uttar Pradesh. It is dedicated to Baba Kinaram, a revered saint and the founder of the Aghori sect of Hinduism. The ashram serves as a spiritual center for Aghoris and a place where devotees come to seek blessings and learn about Aghor philosophy."

        ]
    },
    "ayodhya": {
        places: [
            "Ram Janmabhoomi",
            "Hanuman Garhi",
            "Kanak Bhawan",
            "Nageshwar Nath Temple",
            "Guptar Ghat",
            "Dashrath Bhavan"
        ],
        descriptions: [
            "The most sacred site in Ayodhya, believed to be the birthplace of Lord Rama. After years of legal disputes, a grand temple is being constructed here, which is expected to attract millions of devotees once completed.",
            "A temple dedicated to Lord Hanuman, it is one of the most important temples in Ayodhya. The temple is located on a hilltop and offers panoramic views of the town.",
            "A beautiful temple that is believed to be the palace gifted to Sita by Lord Rama. The temple houses stunning idols of Rama and Sita adorned with  gold crowns.",
            "This ancient temple is dedicated to Lord Shiva and is believed to have been built by Kush, the son of Lord Rama. The temple holds special significance during Shivratri.",
            "Located on the banks of the Sarayu River, it is believed to be the place where Lord Rama took his final dip before leaving for his heavenly abode. Evening Aarti at this ghat is a peaceful and spiritual experience.",
            "This site is believed to be the palace of King Dashrath, Lord Rama’s father. It is now a temple that houses statues of Lord Rama and his brothers."
        ]  
    },
    "jaunpur": {
        places: [
            "Shahi Qila (Jaunpur Fort)",
            "Atala Masjid",
            "Jama Masjid",
            "Lal Darwaza Masjid",
            "Shahi Bridge",
            "Trilochan Mahadev Temple",
            "Panja Sharif",
            "Mola Abbas Dargah"
        ],
        descriptions: [
            "Built by Feroz Shah Tughlaq in 1362, this fort is located on the banks of the Gomti River. It has magnificent gateways and walls and provides a panoramic view of the city.",
            "This iconic mosque, built in 1408 by Sultan Ibrahim Shah of the Sharqi dynasty, is one of the finest examples of Sharqi architecture. It features tall, beautiful domes and intricate carvings.",
            "Another masterpiece of Sharqi architecture, the Jama Masjid was built in the 15th century. Its grand structure and artistic details make it one of the top tourist attractions in Jaunpur.",
            "Built in 1447, this mosque is smaller but equally significant, known for its beautiful design. It is also known as THE RED GATE MOSQUE because of its red sandstone construction.",
            "Built by Munim Khan in the 16th century, this historical bridge over the Gomti River is one of the oldest bridges in India. It reflects Mughal architectural brilliance and is still in use today.",
            "A revered temple dedicated to Lord Shiva, located on the banks of the Gomti River. The temple has ancient roots and is visited by thousands of devotees, especially during Shivratri.",
            "Panja Sharif in Badagaon, located near Shahganj in the Jaunpur district of Uttar Pradesh, is an important religious and spiritual site, especially for the Shia Muslim community. It is a place of reverence and is known for its association with Imam Ali, the first Imam of Shia Islam, and the religious traditions related to the Panja (symbolic hand).",
            "Mola Abbas Dargah in Badagaon, near Shahganj in the Jaunpur district of Uttar Pradesh, is a well-known religious site, particularly for Shia Muslims. This dargah is dedicated to Hazrat Abbas ibn Ali, a revered figure in Islamic history, especially among the Shia community. Hazrat Abbas, the younger brother of Imam Husayn, is honored for his bravery, loyalty, and sacrifice during the Battle of Karbala."
        ]
    }
    // Add more destinations similarly
};



// Function to display suggestions
function suggestPlaces() {
    const input = document.getElementById("search").value.toLowerCase();
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = ''; // Clear previous results

    if (destinations[input]) {
        suggestions.style.display = 'block'; // Show the suggestions box
        suggestions.innerHTML = `<h2>Suggested Places in ${input.charAt(0).toUpperCase() + input.slice(1)}:</h2><ul>`;

        destinations[input].places.forEach((place, index) => {
            suggestions.innerHTML += `
                <li><strong>${place}:</strong> ${destinations[input].descriptions[index]}</li>
            `;
        });

        suggestions.innerHTML += `</ul>`;
    } else {
        suggestions.style.display = 'block'; // Show "no suggestions" message
        suggestions.innerHTML = `<h2>No suggestions available for "${input}".</h2>`;
    }
}

// Event listener for Search button
document.getElementById("search-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent button from submitting form
    suggestPlaces(); // Call the search function
});

// Event listener for Enter key
document.getElementById("search").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default Enter key behavior
        suggestPlaces(); // Call the search function
    }
});
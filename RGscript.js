src="https://unpkg.com/@popperjs/core@2"
src="https://unpkg.com/tippy.js@6"



const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
              labels: ['Fantasy', 'Science Fiction', 'Mystery', 'Thriller', 'Romance', 'Non-Fiction', 'Bios and Memoirs'],
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3, 15],
                backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
});

$("#kt_datatable_zero_configuration").DataTable();

let books = {
  data: [
    {
      title: "Animal Farm",
      category: "Political Satire",
      author: "George Orwell",
      image: "Images/AnimalFarm.jpg",
      description: "A special student edition of Orwell's timeless fable, with an introduction and study notes. When the downtrodden animals of Manor Farm overthrow their master Mr Jones and take over the farm themselves, they imagine it is the beginning of a life of freedom and equality. But gradually a cunning, ruthless élite among them starts to take control, and the animals find themselves hopelessly ensnared as one form of tyranny is replaced with another. This special student edition of George Orwell's chilling satire is specifically designed for readers who are studying the text in detail. It has extra-wide margins to leave space for notes, and includes an introduction and notes by Orwell expert Ronald Carter, character sketches, a summary, a chronology, language notes and a selection of questions and topics for discussion and analysis."
    },
    {
      title: "Brave New World",
      category: "Dystopian",
      author: "Aldous Huxley",
      image: "Images/BraveNewWorld.jpg",
      description: "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order–all at the cost of our freedom, full humanity, and perhaps also our souls. “A genius [who] who spent his life decrying the onward march of the Machine” (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New Worldd likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites."
    },
    {
      title: "Chainsaw Man",
      category: "Fantasy",
      author: "Tatsuki Fujimoto",
      image: "Images/ChainsawMan.jpg",
      description: "Broke young man + chainsaw demon = Chainsaw Man! Denji was a small-time devil hunter just trying to survive in a harsh world. After being killed on a job, he is revived by his pet devil Pochita and becomes something new and dangerous—Chainsaw Man! Denji's a poor young man who'll do anything for money, even hunting down devils with his pet devil Pochita. He's a simple man with simple dreams, drowning under a mountain of debt. But his sad life gets turned upside down one day when he's betrayed by someone he trusts. Now with the power of a devil inside him, Denji's become a whole new man—Chainsaw Man!"
    },
    {
      title: "Delicious in Dungeon",
      category: "Fantasy",
      author: "Ryoko Kui",
      image: "Images/delicious-in-dungeon-dungeon-meshi-vol14.jpg",
      description: "When young adventurer Laios and his company are attacked and soundly thrashed by a dragon deep in a dungeon, the party loses all its money and provisions. They're eager to get right back to it, but there's just one problem: if they set out with no food or coin to speak of, they're sure to eat it on the way! But Laios comes up with a brilliant idea: 'Let's eat the monsters!' Slimes, basilisks, mimics, and even dragons...none are safe from the appetites of these dungeon-crawling gourmands!"
    },
    {
      title: "Marigold Mind Laundry",
      category: "Literary Fiction",
      author: "Jungeun Yun",
      image: "Images/MarigoldMindLaundry.jpg",
      description: "We will wash away your pain and iron away any creases in your heart. Overnight, in the village of Marigold on top of a hill, old Jieun has conjured up a magical Mind Laundry, where she cleanses painful experiences from her customer's hearts, transferring them into stains on a T-shirt and transforming them into dazzling red petals. We meet five of Jieun's customers to her laundry: a frustrated young filmmaker; a tortured social-media influencer; a distraught mother who has discovered her husband’s other family; a young woman two-timed by her lover, and Yeonghui, a victim of bullying, who works as a delivery man to escape his pain in routine. After washing away their pain and ironing out their creases, Jieun discovers an astonishing revelation about memory, pain and moving on. As we laugh, wonder and grow with the vivid characters in this book, MARIGOLD MIND LAUNDRY shows how we too can tap into the positivity and magic that lies in us all. Which bad memories would you like to wash away?"
    },
    {
      title: "Fahrenheit 451",
      category: "Dystopian Fiction",
      author: "Ray Bradbury",
      image: "Images/Fahrenheit451.jpg",
      description: "Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn't live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known."
    },
    {
      title: "The Fever King",
      category: "Dystopian Fiction",
      author: "Victoria Lee",
      image: "Images/TheFeverKing.jpg",
      description: "Featured in Seventeen, The Verge, Hypable, School Library Journal, Publishers Weekly, The Nerd Daily, Booklist, and SyFy Wire. In the former United States, sixteen-year-old Noam Álvaro wakes up in a hospital bed, the sole survivor of the viral magic that killed his family and made him a technopath. His ability to control technology attracts the attention of the minister of defense and thrusts him into the magical elite of the nation of Carolinia. The son of undocumented immigrants, Noam has spent his life fighting for the rights of refugees fleeing magical outbreaks—refugees Carolinia routinely deports with vicious efficiency. Sensing a way to make change, Noam accepts the minister's offer to teach him the science behind his magic, secretly planning to use it against the government. But then he meets the minister's son—cruel, dangerous, and achingly beautiful—and the way forward becomes less clear. Caught between his purpose and his heart, Noam must decide who he can trust and how far he's willing to go in pursuit of the greater good."
    },
    {
      title: "The Electric Heir",
      category: "Dystopian Fiction",
      author: "Victoria Lee",
      image: "Images/TheElectricHeir.jpg",
      description: "In the sequel to The Fever King, Noam Álvaro seeks to end tyranny before he becomes a tyrant himself. Six months after Noam Álvaro helped overthrow the despotic government of Carolinia, the Atlantians have gained citizenship, and Lehrer is chancellor. But despite Lehrer's image as a progressive humanitarian leader, Noam has finally remembered the truth that Lehrer forced him to forget—that Lehrer is responsible for the deadly magic infection that ravaged Carolinia. Now that Noam remembers the full extent of Lehrer's crimes, he's determined to use his influence with Lehrer to bring him down for good. If Lehrer realizes Noam has evaded his control—and that Noam is plotting against him—Noam's dead. So he must keep playing the role of Lehrer's protégé until he can steal enough vaccine to stop the virus. Meanwhile Dara Shirazi returns to Carolinia, his magic stripped by the same vaccine that saved his life. But Dara's attempts to ally himself with Noam prove that their methods for defeating Lehrer are violently misaligned. Dara fears Noam has only gotten himself more deeply entangled in Lehrer's web. Sooner or later, playing double agent might cost Noam his life."
    },
    {
      title: "Walden",
      category: "Biography",
      author: "Henry David Thoreau",
      image: "Images/Walden.jpg",
      description: "Originally published in 1854, Walden; or, Life in the Woods, is a vivid account of the time that Henry D. Thoreau lived alone in a secluded cabin at Walden Pond. It is one of the most influential and compelling books in American literature. This new paperback edition-introduced by noted American writer John Updike-celebrates the 150th anniversary of this classic work. Much of Walden's material is derived from Thoreau's journals and contains such engaging pieces as 'Reading' and 'The Pond in the Winter' Other famous sections involve Thoreau's visits with a Canadian woodcutter and with an Irish family, a trip to Concord, and a description of his bean field. This is the complete and authoritative text of Walden-as close to Thoreau's original intention as all available evidence allows. For the student and for the general reader, this is the ideal presentation of Thoreau's great document of social criticism and dissent."
    },
    {
      title: "This Is How You Lose The Time War",
      category: "Science Fiction",
      author: "Amal El-Mohtar",
      image: "Images/Thisishowulosethetimewar.jpg",
      description: "Two time-traveling agents from warring futures, working their way through the past, begin to exchange letters and soon fall in love, even though the discovery of their bond could mean death for each of them."
    },
  ],
};

// Function to create book cards
function createCard(book) {
  let card = document.createElement("div");
  card.classList.add("card");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", book.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("book-title");
  name.innerText = book.title;

  tippy(card, {
    content: 'Want some '+ book.category + '?',
    placement: 'bottom', // Optional: position the tooltip
    theme: 'light', // Optional: theme of the tooltip
   
  });

  name.addEventListener("click", () => openPopup(book)); // Open popup on click
  container.appendChild(name);

  let writer = document.createElement("h6");
  writer.innerText = book.author;
  container.appendChild(writer);

  // Reserve button
  let reserveBtn = document.createElement("button");
  reserveBtn.innerText = "Reserve";
  reserveBtn.classList.add("reserve-btn");
  reserveBtn.addEventListener("click", () => {
    reserveBtn.innerText = "Reserved";
    reserveBtn.disabled = true;
  });
  container.appendChild(reserveBtn);

  card.appendChild(container);
  document.getElementById("books").appendChild(card);
}



// Create all book cards on load
window.onload = () => {
  books.data.forEach(createCard);
};

// Search button click
document.getElementById("findBtn").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector(".book-title").innerText.toLowerCase();
    if (title.includes(searchInput)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
});

// Open a popup for book details
function openPopup(book) {
  let popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-btn" onclick="this.parentElement.parentElement.remove();">&times;</span>
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Category:</strong> ${book.category}</p>
      <p>${book.description}</p>
      
    </div>
  `;
  document.body.appendChild(popup);
}
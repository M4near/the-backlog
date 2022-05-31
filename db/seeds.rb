# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding users..."
User.create([
  {
    username: "Michael",
    password: "111111"
  },
  {
      username: "Test",
      password: "Testing"
  }
])

puts "Seeding games..."
Game.create([
    {
        title:"Halo: Combat Evolved",
        genre:"First Person Shooter",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg/220px-Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg",
        summary: "Halo is set in the twenty-sixth century, with the player assuming the role of the Master Chief, a cybernetically enhanced supersoldier. The Chief is accompanied by Cortana, an artificial intelligence. Players battle aliens as they attempt to uncover the secrets of the eponymous Halo, a ring-shaped artificial world.",
        on_PC: "true", 
        on_Xbox: true,
        on_Playstation: false,
        on_Switch: false,
    },
    {
        title:"The Elder Scrolls V: Skyrim",
        genre:"Action Role-Playing",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/The_Elder_Scrolls_V_Skyrim_cover.png/220px-The_Elder_Scrolls_V_Skyrim_cover.png",
        summary: "The game is set 200 years after the events of Oblivion, and takes place in Skyrim, the northernmost province of Tamriel. Its main story focuses on the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: true,
    },
    {
        title:"Prey",
        genre:"First Person Shooter",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Prey_cover_art.jpg/220px-Prey_cover_art.jpg",
        summary: "The game takes place in an alternate timeline in which an accelerated Space Race resulted in humankind taking to orbital stations far earlier. The player controls Morgan Yu while exploring the space station Talos I, in orbit around Earth–Moon L2, where they were part of a scientific team researching the Typhon, a hostile alien force composed of many forms with both physical and psychic powers, such as shapeshifting into a clone of any inanimate object. As the Typhon escape confinement, the player uses a variety of weapons and abilities derived from the Typhon to avoid being killed while looking to escape the station.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: false, 
    },
    {
        title:"Star Wars Jedi: Fallen Order",
        genre:"Action-adventure",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg/220px-Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg",
        summary: "The story, set in the Star Wars universe five years after Star Wars: Episode III - Revenge of the Sith, follows Jedi Padawan Cal Kestis, who becomes a target of the Galactic Empire and is hunted throughout the galaxy by the Imperial Inquisition while attempting to complete his training, reconcile with his troubled past, and rebuild the fallen Jedi Order.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"Control",
        genre:"Action-adventure",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/D1IOd0BWsAAiX5T.jpg/220px-D1IOd0BWsAAiX5T.jpg",
        summary: "The game revolves around the Federal Bureau of Control (FBC), a secret U.S. government agency tasked with containing and studying phenomena that violate the laws of reality. As Jesse Faden (Courtney Hope), the Bureau's new Director, the player explores the Oldest House - the FBC's paranormal headquarters - and utilizes powerful abilities in order to defeat a deadly enemy known as the Hiss, which has invaded and corrupted reality. The player gains abilities by finding Objects of Power, mundane objects like a rotary phone or a floppy disk imbued with energies from another dimension, that have been at the center of major paranormal events and since recovered by the FBC",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"Spider-Man",
        genre:"Action-adventure",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Spider-Man_PS4_cover.jpg/220px-Spider-Man_PS4_cover.jpg",
        summary: "Based on the Marvel Comics character Spider-Man, it tells an original narrative that is inspired by the long-running comic book mythology, while also drawing from various adaptations in other media. In the main story, the super-human crime lord Mister Negative orchestrates a plot to seize control of New York City's criminal underworld. When Mister Negative threatens to release a deadly virus, Spider-Man must confront him and protect the city while dealing with the personal problems of his civilian persona, Peter Parker.",
        on_PC: false, 
        on_Xbox: false,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"The Witcher 3: Wild Hunt",
        genre:"Action Role-Playing",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg",
        summary: "The game takes place in a fictional fantasy world based on Slavic mythology. Players control Geralt of Rivia, a monster slayer for hire known as a Witcher, and search for his adopted daughter, who is on the run from the otherworldly Wild Hunt. Players battle the game's many dangers with weapons and magic, interact with non-player characters, and complete quests to acquire experience points and gold, which are used to increase Geralt's abilities and purchase equipment. The game's story has three possible endings, determined by the player's choices at key points in the narrative.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: true,
    },
    {
        title:"Minecraft",
        genre:"Sandbox",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png",
        summary: "In Minecraft, players explore a blocky, procedurally generated 3D world with virtually infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures, earthworks and simple machines. Depending on game mode, players can fight computer-controlled mobs, as well as cooperate with or compete against other players in the same world. Game modes include a survival mode, in which players must acquire resources to build the world and maintain health, and a creative mode where players have unlimited resources and access to flight. Players can modify the game to create new gameplay mechanics, items, and assets.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: true,
    },
    {
        title:"Red Dead Redemption 2",
        genre:"Action-adventure",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/220px-Red_Dead_Redemption_II.jpg",
        summary: "The story is set in 1899 and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, in a fictionalized representation of the Western, Midwestern, and Southern United States. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"Persona 5",
        genre:"Role-playing",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Persona_5_cover_art.jpg/220px-Persona_5_cover_art.jpg",
        summary: "Persona 5 takes place in modern-day Tokyo and follows a high school student known by the pseudonym Joker who transfers to a new school after being falsely accused of assault and put on probation. Over the course of a school year, he and other students awaken to a special power, becoming a group of secret vigilantes known as the Phantom Thieves of Hearts. They explore the Metaverse, a supernatural realm born from humanity's subconscious desires, to steal malevolent intent from the hearts of adults.",
        on_PC: false, 
        on_Xbox: false,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"Stardew Valley",
        genre:"Simulation",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Logo_of_Stardew_Valley.png/220px-Logo_of_Stardew_Valley.png",
        summary: "Players take the role of a character who takes over their deceased grandfather's dilapidated farm in a place known as Stardew Valley. Stardew Valley is open-ended, allowing players to take on activities such as growing crops, raising livestock, mining and foraging, selling produce, and socializing with the townspeople, including the ability to marry and have children.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: true,
    },
    {
        title:"Ghost of Tsushima",
        genre:"Action-adventure",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Ghost_of_Tsushima.jpg/220px-Ghost_of_Tsushima.jpg",
        summary: "Featuring an open world, the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.",
        on_PC: false, 
        on_Xbox: false,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"Yakuza Kiwami",
        genre:"Action-adventure",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Yakuza_Kiwami_cover.jpg/220px-Yakuza_Kiwami_cover.jpg",
        summary: "Like the original PlayStation 2 game, Yakuza Kiwami explores the life of a man named Kazuma Kiryu who is demoted from his clan after taking the blame for his boss's murder. After a decade in prison, Kiryu searches for his old friends who have gone missing. The remake adds extra elements to the story, including Akira Nishikiyama's corruption during Kiryu's imprisonment and constant struggles between Kiryu and his rival Goro Majima.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"Portal 2",
        genre:"Puzzle-platform",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Portal2cover.jpg/220px-Portal2cover.jpg",
        summary: "Featuring an open world, the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: true,
    },
    {
        title:"Elden Ring",
        genre:"Action Role-Playing",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Elden_Ring_Box_art.jpg/220px-Elden_Ring_Box_art.jpg",
        summary: "Elden Ring takes place in the Lands Between, sometime after the destruction of the titular Elden Ring and the scattering of its shards, the Great Runes. Once graced by the Ring and the Erdtree which symbolizes its presence, the realm is now ruled over by the demigod offspring of Queen Marika the Eternal, each possessing a shard of the Ring that corrupts and taints them with power. As Tarnished — exiles from the Lands Between who lost the Ring's grace and are summoned back after the Shattering — players must traverse the realm to ultimately become the Elden Lord.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"Alien: Isolation",
        genre:"Survival horror",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Alien_Isolation.jpg/220px-Alien_Isolation.jpg",
        summary: "Based on the Alien film series, the game is set 15 years after the events of the original 1979 film Alien, and follows engineer Amanda Ripley, daughter of Alien protagonist Ellen Ripley, as she investigates the disappearance of her mother aboard the space station Sevastopol. Once inside, Amanda discovers that the station has fallen into disarray due to an Alien creature on the loose and must find a way to escape.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"Horizon Forbidden West",
        genre:"Action Role-Playing",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Horizon_Forbidden_West_cover_art.jpg/220px-Horizon_Forbidden_West_cover_art.jpg",
        summary: "Horizon Forbidden West continues the story of Aloy, a young hunter of the Nora tribe, as she leads a band of companions on a quest to the arcane frontier known as the Forbidden West to find the source of a mysterious plague that kills all it infects. On her journey across these uncharted lands, Aloy encounters new regions ravaged by massive storms and deadly machines, and conflicts with a tribe of nomadic raiders who have tamed the machines as war mounts.",
        on_PC: false, 
        on_Xbox: false,
        on_Playstation: true,
        on_Switch: false,
    },
    {
        title:"Final Fantasy VII",
        genre:"Role-playing",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Final_Fantasy_VII_Box_Art.jpg/220px-Final_Fantasy_VII_Box_Art.jpg",
        summary: "The game's story follows Cloud Strife, a mercenary who joins an eco-terrorist organization to stop a world-controlling megacorporation from using the planet's life essence as an energy source. Events send Cloud and his allies in pursuit of Sephiroth, a former member of the corporation who seeks to destroy the planet. During the journey, Cloud builds close friendships with his party members, including Aerith Gainsborough, who holds the secret to saving their world.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: true,
    },
    {
        title:"Resident Evil 4",
        genre:"Survival horror",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Resi4-gc-cover.jpg/220px-Resi4-gc-cover.jpg",
        summary: " Players control U.S. government special agent Leon S. Kennedy, who is sent on a mission to rescue the U.S. president's daughter Ashley Graham, who has been kidnapped by a cult. In a rural part of Spain, Leon fights hordes of villagers infected by a mind-controlling parasite.",
        on_PC: true, 
        on_Xbox: true,
        on_Playstation: true,
        on_Switch: true,
    },
    {
        title:"Mario Kart 8",
        genre:"Kart racer",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/MarioKart8Boxart.jpg/220px-MarioKart8Boxart.jpg",
        summary: "players control Mario franchise characters in kart racing, collecting a variety of items to hinder opponents or gain advantages in the race. Mario Kart 8 introduces anti-gravity driving on walls or ceilings, and allows players to bump into each other for a short boost.",
        on_PC: false, 
        on_Xbox: false,
        on_Playstation: false,
        on_Switch: true,
    }
])

# puts "Seeding list_items..."
# ListItem.create([
#     {
#         user_id: 1,
#         game_id: 3,
#         recommends: nil,
#         completed: true,
#         deadline: "2022-07-10",
#         time_played: 20,
#     },
#     {
#         user_id: 2,
#         game_id: 19,
#         recommends: nil,
#         completed: false,
#         deadline: "2022-06-15",
#         time_played: nil,
#     }
# ])

puts "Done seeding!"

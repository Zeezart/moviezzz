import image1 from "../assets/movies/avatar.jpg"
import image2 from "../assets/movies/blackpanther.jpg"
import image3 from "../assets/movies/casablanca.jpg"
import image4 from "../assets/movies/drstrange.jpg"
import image6 from "../assets/movies/forestgamp.jpg"
import image7 from "../assets/movies/godfather.jpg"
import image8 from "../assets/movies/harrypotter.jpg"
import image9 from "../assets/movies/inception.jpg"
import image10 from "../assets/movies/jurrasicpark.jpg"
import image11 from "../assets/movies/lionking.jpg"
import image12 from "../assets/movies/matrix.jpg"
import image13 from "../assets/movies/nocountry.jpg"
import image14 from "../assets/movies/oldguard.jpg"
import image15 from "../assets/movies/pulpfiction.jpg"

export const movieData = [
    {
        id: 1,
        title: "Avatar",
        releaseDate: "December 18, 2009",
        duration: "162 minutes",
        starring: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        rating: 7.8,
        description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        genre: "Science Fiction",
        tags: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        image:image1
      },
      {
        id: 2,
        title: "Black Panther",
        releaseDate: "February 16, 2018",
        duration: "134 minutes",
        starring: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
        rating: 7.3,
        description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
        genre: "Action",
        tags: ["Adventure", "Sci-Fi"],
        image:image2
      },
      {
        id: 3,
        title: "Casablanca",
        releaseDate: "January 23, 1943",
        duration: "102 minutes",
        starring: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
        rating: 8.5,
        description: "Set in unoccupied Africa during the early days of World War II: An American expatriate meets a former lover, with unforeseen complications.",
        genre: "Drama",
        tags: ["Romance", "War"],
        image:image3
      },
      {
        id: 4,
        title: "Doctor Strange",
        releaseDate: "November 4, 2016",
        duration: "115 minutes",
        starring: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams"],
        rating: 7.5,
        description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        genre: "Action",
        tags: ["Adventure", "Fantasy"],
        image:image4
      },
    //   {
    //     id: 5,
    //     title: "E.T. the Extra-Terrestrial",
    //     releaseDate: "June 11, 1982",
    //     duration: "115 minutes",
    //     starring: ["Henry Thomas", "Drew Barrymore", "Peter Coyote"],
    //     rating: 7.8,
    //     description: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    //     genre: "Family",
    //     tags: ["Sci-Fi"],
    //     image:image5
    //   },
      {
        id: 6,
        title: "Forrest Gump",
        releaseDate: "July 6, 1994",
        duration: "142 minutes",
        starring: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        rating: 8.8,
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        genre: "Drama",
        tags: ["Romance"],
        image:image6
      },
      {
        id: 7,
        title: "The Godfather",
        releaseDate: "March 24, 1972",
        duration: "175 minutes",
        starring: ["Marlon Brando", "Al Pacino", "James Caan"],
        rating: 9.2,
        description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        genre: "Crime",
        tags: ["Drama"],
        image:image7
      },
      {
        id: 8,
        title: "Harry Potter",
        releaseDate: "November 16, 2001",
        duration: "152 minutes",
        starring: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
        rating: 7.6,
        description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        genre: "Adventure",
        tags: ["Family", "Fantasy"],
        image:image8
      },
      {
        id: 9,
        title: "Inception",
        releaseDate: "July 16, 2010",
        duration: "148 minutes",
        starring: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        rating: 8.8,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        genre: "Action",
        tags: ["Adventure", "Sci-Fi"],
        image:image9
      },
      {
        id: 10,
        title: "Jurassic Park",
        releaseDate: "June 11, 1993",
        duration: "127 minutes",
        starring: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        rating: 8.1,
        description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
        genre: "Adventure",
        tags: ["Sci-Fi", "Thriller"],
        image:image10
    },
    {
        id: 11,
        title: "The Lion King",
        releaseDate: "June 24, 1994",
        duration: "88 minutes",
        starring: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        rating: 8.5,
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        genre: "Animation",
        tags: ["Adventure", "Drama"],
        image:image11
      },
      {
        id: 12,
        title: "The Matrix",
        releaseDate: "March 31, 1999",
        duration: "136 minutes",
        starring: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        rating: 8.7,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        genre: "Action",
        tags: ["Sci-Fi"],
        image:image12
      },
      {
        id: 13,
        title: "No Country for Old Men",
        releaseDate: "November 21, 2007",
        duration: "122 minutes",
        starring: ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"],
        rating: 8.1,
        description: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        genre: "Crime",
        tags: ["Drama", "Thriller"],
        image:image13
      },
      {
        id: 14,
        title: "The Old Guard",
        releaseDate: "July 10, 2020",
        duration: "125 minutes",
        starring: ["Charlize Theron", "KiKi Layne", "Matthias Schoenaerts"],
        rating: 6.6,
        description: "A covert team of immortal mercenaries are suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.",
        genre: "Action",
        tags: ["Fantasy"],
        image:image14
      },
      {
        id: 15,
        title: "Pulp Fiction",
        releaseDate: "October 14, 1994",
        duration: "154 minutes",
        starring: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        rating: 8.9,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        genre: "Crime",
        tags: ["Drama"],
        image:image15
      },
    //   {
    //     id: 16,
    //     title: "Queen & Slim",
    //     releaseDate: "November 27, 2019",
    //     duration: "132 minutes",
    //     starring: ["Daniel Kaluuya", "Jodie Turner-Smith", "Bokeem Woodbine"],
    //     rating: 7.0,
    //     description: "A couple's first date takes an unexpected turn when a police officer pulls them over.",
    //     genre: "Drama",
    //     tags: ["Romance"],
    //   },
    //   {
    //     id: 17,
    //     title: "Raiders of the Lost Ark",
    //     releaseDate: "June 12, 1981",
    //     duration: "115 minutes",
    //     starring: ["Harrison Ford", "Karen Allen", "Paul Freeman"],
    //     rating: 8.4,
    //     description: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
    //     genre: "Action",
    //     tags: ["Adventure"],
    //   },
    //   {
    //     id: 18,
    //     title: "The Shawshank Redemption",
    //     releaseDate: "October 14, 1994",
    //     duration: "142 minutes",
    //     starring: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    //     rating: 9.3,
    //     description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    //     genre: "Drama",
    //     tags: ["Crime"],
    //   },
    //   {
    //     id: 19,
    //     title: "The Truman Show",
    //     releaseDate: "June 5, 1998",
    //     duration: "103 minutes",
    //     starring: ["Jim Carrey", "Ed Harris", "Laura Linney"],
    //     rating: 8.1,
    //     description: "An insurance salesman discovers his whole life is actually a reality TV show.",
    //     genre: "Comedy",
    //     tags: ["Drama", "Sci-Fi"],
    //   },
    //   {
    //     id: 20,
    //     title: "Up",
    //     releaseDate: "May 29, 2009",
    //     duration: "96 minutes",
    //     starring: ["Edward Asner", "Jordan Nagai", "John Ratzenberger"],
    //     rating: 8.2,
    //     description: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
    //     genre: "Animation",
    //     tags: ["Adventure", "Comedy"],
    //   },
    //   {
    //     id: 21,
    //     title: "Vertigo",
    //     releaseDate: "May 28, 1958",
    //     duration: "128 minutes",
    //     starring: ["James Stewart", "Kim Novak", "Barbara Bel Geddes"],
    //     rating: 8.3,
    //     description: "A former police detective juggles wrestling with his personal demons",
    //   }
  ]

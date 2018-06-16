const { Reviews, Review } = require('./../models/listingReviewsModel.js');
const sampleData = {
  goodReview: [
  // goodIntro: 
  [
    `Me and my family have stayed at ${this.name}'s property for a week. It was a great time! `,
    `I rented this property very last minute but ${this.name} was manage to accomodate me! `,
    `We were in town for two weeks and have decided to go with ${this.name} property. It was our first time renting online. `,
    `My brother and I have decided to escape our families for the sake of saving the marriage. `,
    `It was a long childhood dream of mine to escape my hometown. But I didn't want to stay in a hotel. Why would I? `,
    `I used to live in a forest but civilization has got to me. I now live in a forest too, but I used too, too. Anyhow, `,
    `It was a long awaited trip. I was skeptical that place would not be what it looks like in the pictures. `,
    `What a wonderful stay it was! `,
    `This is my first review. `,
    `My English is no good. Me like it. Host was good. ` 
  ],

  // goodBody: 
  [
    `The house is very warm, welcoming and has all necesities one may need! I especially like the bed. Sorry for the stains. `,
    `Overall it was a positive experience. We had an issue with the kitchen being not very well suited for producing Big Macs, oh well. Overall it was decent. `,
    `The house was quite secluded and no neighbors were bothering me and my company. Extra big garage and jigsaw available onsite was a nice addition. `,
    `I was here for a business trip and hence why a charge on my credit card and not on business account. Overall it was nice and many extra bedding goes a long way. `,
    `Windows were big, bathroom is clean and they even left some wine for us. Sadly it was open and dated. `, 
    `Floors were good. Wallpaint was fresh. Furniture is nice. I mean, I would have bought it. `,
    `The place was spacious and very well equipped. `,
    `Very well kept place. It was very clean when we have arrived, the shelves were stocked with toilettes and they even left us some fruits on the table. `,
    `Great house. We were very happy with it. `,
    `We were't looking for beds to sleep on. We had only 3 days in the city and a bag full of money. We could of just slept on a pile of cash if we wanted. Double metal doors were nice. `
  ], 

  // goodEnding:
  [
    'We definitely would be back!',
    'If you hesitant, don\'t be. This house is bomb!',
    'Perfect place for a perfect little vacation!',
    'Whenever in doubt, rent this place!',
    'I mean, you can rent a hotel room for in the same price range, but here you can cook.',
    'I already have made plans to come back here!',
    'All in all a good value. Thanks!',
    'Perfect spot for a bachelor party! thanks!',
    'I don\'t know. I probably would stay here again',
    'If you are unedcisive, don\'t be, rent this place!'
  ]],

  badReview: [
  // badIntro: 
  [
    'OMG! NEVER AGAIN! ', 
    `If you like living like in a movie, that place is for you. Slumdog Millionaire movie, though. `,
    `The words would not be able to describe how bad our stay was! `,
    `I mean, we have survived the trip and we are quite happy about it. `,
    `It all started with the fact that the host was 2 hours late... `
  ],

  // badBody: 
    [
      `There was literally no floors! Host has sent contractors to finish their work while we were there. They just came in and ripped out the floors exposing us to basement. What were we suppose to do? `,
      `The kitchen had grease all over. There were dirty dishes eveywhere. Beds had stained sheets. Should I even continue? `,
      `There was a dog inside the house. An actual dog. It beat me on the arm and I had to sleep outside in a carton. `,
      `Bedbugs. Bedbugs everywhere! I brought them home with me, too. Bites, bites, and more bites! `,
      `It was all great. The house looked great until one day I came home and there were people in black capes sacraficing a goat on my bed. `
    ],
  
  // badEnding:
  [
    `Stay away from this place!`,
    `Do yourself a favor and rent a different property.`,
    `I honestly couldn't believe all of this. Never again!`,
    `From now on, hotels only!`,
    `Screw you! I worked 60 hours a day for two years straight to save for this vacation and it is all rained because of a greedy liar!`
  ]],

  coleMichaels: 'Wrong. All of this is wrong.'
};

const randomizer = (min, max) => {
  return Math.floor((Math.random() * (max - min) + min));
};

const generateReview = () => {
  let randomReview = (reviews) => {
    return (
      reviews[0][Math.floor(Math.random() * reviews[0].length)]
      +
      reviews[1][Math.floor(Math.random() * reviews[1].length)]
      +
      reviews[2][Math.floor(Math.random() * reviews[2].length)]
    );
  };

  return (
  (randomizer(11, 1) > 8)
  ?
  randomReview(sampleData.badReview)
  :
  randomReview(sampleData.goodReview)
  )

};

let users = [
"Marjory",  
"Nicki",  
"Trevor",  
"Lanora",  
"Nedra",  
"Karleen",  
"Trinity",  
"Kelle",  
"Jere",  
"Leonida",  
"Malinda",  
"Hanh",  
"Josette",  
"Marivel",  
"Huong",  
"Freeda",  
"Dwight",  
"Carolann",  
"Gregg",  
"Jamila",  
"Philomena",  
"Dortha",  
"Celsa",  
"Josue",  
"Reatha",  
"Leanna" , 
"Arnette",  
"Teodoro" , 
"Kari"  ,
"Edyth"  ,
"Brigitte",  
"Roselle",  
"Kathyrn",  
"Nicol",  
"Marlana",  
"Joslyn",  
"Stephan",  
"Jacquline",  
"Beaulah",  
"Lance",  
"Jules",  
"Hortensia",  
"Flo",  
"Sierra",  
"Angelo", 
"Milagro",  
"Bonny",  
"Emile", 
"Tenisha",  
"Hilda"  
]

const date = () => new Date().toDateString().slice(4);

const populateReviews = (passedId) => {
  let revs = Array.apply(1, Array(randomizer(1, 30)));
  revs.map(rev => {
    return (Review.create ({
      body: generateReview(),
      dateCreated: date(),
      userId: randomizer(1,100),
      listing_id: passedId,
      communication: randomizer(1,6),
      location: randomizer(1,6),
      checkIn: randomizer(1,6),
      cleanliness: randomizer(1,6),
      value: randomizer(1,6),
      accuracy: randomizer(1,6),
    }));
    // rev.rating = () => ((this.communication + this.location + this.checkIn + this.cleanliness + this.value + this.accuracy) / 6)
    // console.log(rev)
  });
  console.log('revs', date)
  // Reviews.create({listingId: passedId, reviews: revs});
}


module.exports = {
  populateReviews: populateReviews,
  randomizer: randomizer
};
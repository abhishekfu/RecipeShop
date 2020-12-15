const recipe = [
    {
        id: 'r1',
        title: 'Cranberry Salad',
        description: 'This cranberry salad recipe is reminiscent of a Waldorf salad or a taffy apple salad. Sweet and creamy, this cranberry salad is supposedly a favorite among kids but all of the adults love it too!',
        postedBy: {
            id: 'u1',
            name: 'Alex'
        },
        images: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsYWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c2FsYWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1547496502-affa22d38842?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsYWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1'
        ],
        ingredients: [
            '1 (12 ounce) package fresh cranberries, finely chopped',
            '½ cup white sugar',
            '2 cups chopped apples',
            '1 cup miniature marshmallows',
            '½ cup chopped pecans',
            '½ cup vanilla yogurt',
            '1 cup frozen whipped topping (such as Cool Whip®), thawed'
        ],
        directions: [
            'Combine chopped cranberries and sugar in a large, nonreactive bowl. Toss well. Cover and refrigerate for 3 hours.',
            'After 3 hours, stir apples, marshmallows, and pecans into cranberries. Combine yogurt and whipped topping; fold into cranberry salad. Serve immediately.'
        ],
        additionalNote: "I always prepare the recipe up to step 3 the day before than complete it in the morning and usually serve it for lunch. It says to serve immediately but the salad keeps well in the refrigerator for up to 2 days although there usually aren't any leftovers.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2020-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    },
    {
        id: 'r2',
        title: 'Yukon Cornelius Pull-Apart Cupcake Cake',
        description: 'Yukon Cornelius is my favorite, and an all-time classic, character from "Rudolph the Red-Nosed Reindeer." Did you know that when he would throw his pick axe into the ice and taste the end of it, that he was actually looking for peppermint to mine? As such, I created this cupcake cake in his image with dark chocolate cupcakes filled with a peppermint-white chocolate ganache, and topped with peppermint buttercream. This is a fun and showstopping dessert--perfect for a "Rudolph" watch party! If not serving immediately, store in the fridge no longer than 1 to 2 days before serving.',
        postedBy: {
            id: 'u2',
            name: 'Daniel'
        },
        images: [
            'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1562440499-64c9a111f713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1'
        ],
        ingredients: [
            "1 ¾ cups all-purpose flour",
            "1 cup dark cocoa powder (such as Hershey's® Special Dark), sifted",
            "2 teaspoons baking soda",
            "1 teaspoon baking powder",
            "¾ teaspoon salt",
            "1 cup firmly packed brown sugar",
            "½ cup white sugar",
            "½ cup unsalted butter, softened",
            "2 large eggs, at room temperature",
            "2 teaspoons vanilla extract",
            "1 cup strongly brewed coffee, cooled to room temperature",
            "1 cup sour cream"
        ],
        directions: [
            'Preheat the oven to 350 degrees F (175 degrees C). Line two 12-cup standard cupcake pans with paper liners.',
            'Combine sugars and butter in a large bowl; beat with an electric mixer until light and fluffy. Beat in eggs one at a time, thoroughly mixing after each addition. Beat in vanilla extract.',
            'Whisk flour, cocoa powder, baking soda, baking powder, and salt together in a medium bowl.',
            'Mix 1/3 of the flour mixture into the butter mixture until just combined. Mix in 1/2 of the coffee and 1/2 of the sour cream until just combined. Add remaining flour mixture alternately with remaining sour cream and coffee. Do not overmix. Fill the prepared cupcake cups evenly with batter.',
            'Bake in the preheated oven until they spring back lightly when touched, 18 to 22 minutes. Let cool completely, 30 minutes to 1 hour.',
            'Core cooled cupcakes using a knife or cupcake corer, cutting about halfway down. Save cupcake centers for another use (such as for making a batch of cake balls).',
            'Prepare ganache. Add white chocolate chips and heavy cream to a large, microwave-safe bowl. Heat at 50% power until chocolate is melted and smooth, in 30-second intervals, stirring after each. Mix in crushed candies and peppermint extract until thoroughly combined. Allow to cool for 10 minutes, stirring often.',
            "Place ganache in a piping bag or resealable plastic bag with a corner cut off. Fill each cupcake to the top with ganache. Allow them to sit until ganache firms up and doesn't 'smudge' when pressed lightly with fingertips, 15 to 20 minutes.",
            'Prepare frosting. Cream butter until smooth in a large bowl with an electric mixer. Beat in 1 cup powdered sugar at a time, mixing well after each addition. Mix in vanilla extract, peppermint extract, and salt. Add heavy cream and beat on medium-high speed until light and fluffy, 3 to 5 minutes. If frosting is too thick, add more heavy cream--or if it is too thin, add more powdered sugar until frosting is a spreadable consistency that still holds its shape.'
        ],
        additionalNote: "You can skip filling the cupcakes if you wish.I used Wilton(R) round tips #10 and #12, and open star tip #32 for this cake.I made this cupcake cake over the course of three days to make it easier. Day 1: made and cooled the cupcakes. Day 2: cored the cupcakes, made the ganache, and filled them (kept them stored in Ziploc(R) bags to keep the cupcakes moist). Day 3: made the frosting, laid out the cupcake pattern, and frosted them. So it can be made in advance or in steps to make the process a bit easier.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2020-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    },
    {
        id: 'r3',
        title: 'Tasty Baked Mac n Cheese',
        description: "I love this recipe because it's taken me so long to actually get a good tasting noodle and not just a good tasting piece of cheese on top. This recipe was just trial and error and it's really really good in my opinion. I'm really looking for feedback on this recipe. Thanks so much! This is really good even days after for leftovers. The cheese remelts and the flavor really sets in. Enjoy!",
        postedBy: {
            id: 'u3',
            name: 'Lucas'
        },
        images: [
            'https://images.unsplash.com/photo-1536096119648-4cbab718f351?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjJTIwYW5kJTIwY2hlZXNlfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1569229490681-4085b3f54ba3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjJTIwYW5kJTIwY2hlZXNlfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1487532195053-ae7d32261c6a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwYW5kJTIwY2hlZXNlfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1480603956404-cf57f7ee5f28?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWFjJTIwYW5kJTIwY2hlZXNlfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1585672840829-d4ed3abbfb27?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhc3RhfGVufDB8fDB8&ixlib=rb-1.2.1'
        ],
        ingredients: [
            '1 (16 ounce) package elbow macaroni',
            '½ teaspoon salt',
            '¾ cup butter, softened - divided',
            '1 cup sour cream',
            '1 tablespoon cream cheese, softened',
            '1 (8 ounce) package shredded sharp Cheddar cheese',
            '1 egg yolk'
        ],
        directions: [
            'Preheat oven to 375 degrees F (190 degrees C). Line a 9x13-inch baking dish with parchment paper.',
            'Bring a large pot of water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until almost cooked through and firm to the bite, about 7 minutes. Drain and transfer to a large bowl. Sprinkle macaroni with 1/2 teaspoon salt and stir 1/2 cup butter into the pasta.',
            "Mix 1/4 cup butter, sour cream, cream cheese, sharp Cheddar cheese, and egg yolk together in a bowl. Stir flour, 1/2 teaspoon salt, cayenne pepper, and milk into the sour cream mixture.",
            "Spread 1/4 cup sour cream sauce over bottom of prepared baking dish. Stir remaining sour cream sauce into macaroni. Pour macaroni into baking dish atop sauce layer; sprinkle mild Cheddar cheese over the casserole.",
            "Bake in the preheated oven until heated through and cheese topping has melted, about 15 minutes."
        ],
        additionalNote: "I used the salted butter and also for the half stick, I used Land O'Lakes(R) sea salt and olive oil butter.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2020-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    },
    {
        id: 'r4',
        title: 'Grilled Chicken Salad Sandwich',
        description: 'This is a great way to use leftover grilled chicken breasts from dinner the night before. I like it on wheat. My husband likes it on sourdough.',
        postedBy: {
            id: 'u4',
            name: 'Martin'
        },
        images: [
            'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FuZHdpY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1487532195053-ae7d32261c6a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwYW5kJTIwY2hlZXNlfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1559466273-d95e72debaf8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2FuZHdpY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbmR3aWNofGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbmR3aWNofGVufDB8fDB8'
        ],
        ingredients: [
            '1 cup mayonnaise',
            '⅛ teaspoon ground black pepper',
            '⅛ teaspoon garlic powder',
            '⅛ teaspoon celery salt',
            '4 cups chopped leftover grilled chicken',
            '2 celery stalks, sliced',
            '½ cup sweetened dried cranberries',
            "⅔ cup salted cashews",
            "8 slices bread, toasted",
            "4 tablespoons mayonnaise",
            "4 large red leaf lettuce leaves",
            "1 ripe tomato, sliced"
        ],
        directions: [
            'Whisk together 1 cup of mayonnaise, pepper, garlic powder, and celery salt until combined. Combine the chicken, celery, cranberries, and cashews in a large bowl. Pour the mayonnaise mixture over the chicken mixture and stir until evenly combined.',
            'Spread 1/2 tablespoon of mayonnaise on each slice of toasted bread. Divide the chicken salad between four of the slices of toast; top each with a lettuce leaf and a slice of tomato. Complete each sandwich with the remaining toast slices.'
        ],
        additionalNote: "I used the salted butter and also for the half stick, I used Land O'Lakes(R) sea salt and olive oil butter.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2019-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    },
    {
        id: 'r5',
        title: 'Cardamom Maple Salmon',
        description: 'I am a salmon lover. This is a great recipe for a slightly exotic flavor of Indian inspiration with a maple twist. The flavor is exceptional, delicious, and unique. Orange zest may be added for an extra flavor twist.',
        postedBy: {
            id: 'u3',
            name: 'Lucas'
        },
        images: [
            'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1560717845-968823efbee1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FsbW9ufGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsbW9ufGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2FsbW9ufGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1546530785-86397501ae20?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNhbG1vbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1472142276868-56618a8b23e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNhbG1vbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1'
        ],
        ingredients: [
            '1 ½ teaspoons salt',
            '1 teaspoon paprika',
            '1 teaspoon ground cardamom',
            '1 teaspoon ground coriander',
            '½ teaspoon ground black pepper',
            '¼ cup grapeseed oil',
            '2 tablespoons maple syrup',
'1 (2 pound) salmon fillet, cut into 3-inch pieces'
        ],
        directions: [
            'Stir salt, paprika, cardamom, coriander, and black pepper together in a bowl. Add oil and maple syrup and stir until evenly combined.',
            'Preheat a non-stick frying pan over medium-high heat, about 350 degrees F (175 degrees C).',
'Dredge salmon pieces through the maple syrup mixture until evenly coated on all sides.',
'Cook salmon in the preheated pan until fish flakes easily with a fork, 5 to 7 minutes per side.'
        ],
        additionalNote: "Be careful not to use too high of a temperature or the paprika-maple mixture will burn.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2020-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    },
    {
        id: 'r6',
        title: 'Low Carb Turkey-Stuffed Peppers',
        description: 'Put a healthier family classic on the dinner table by substituting ground turkey for ground beef, and using frozen riced cauliflower instead of high-carb white rice.',
        postedBy: {
            id: 'u3',
            name: 'Lucas'
        },
        images: [
            'https://images.unsplash.com/photo-1524182576066-1bb979e25342?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHR1cmtleSUyMGRpbm5lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1572353242840-6e48f8587cf5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHR1cmtleSUyMGRpbm5lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1456404823214-a69ef7a1fae5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHR1cmtleSUyMGRpbm5lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1574672281706-24413c7e8920?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8dHVya2V5JTIwZGlubmVyfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1606728026197-c6cf088e5cc2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8dHVya2V5JTIwZGlubmVyfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dHVya2V5JTIwZGlubmVyfGVufDB8fDB8&ixlib=rb-1.2.1'
        ],
        ingredients: [
            'nonfat cooking spray',
            '1 tablespoon olive oil',
            '1 pound ground turkey',
            '½ cup diced onion',
            '3 tablespoons diced fresh jalapeno pepper, or to taste',
            '2 cloves garlic, chopped',
            '2 cups frozen cauliflower rice (such as Green Giant®)',
'1 (14.5 ounce) can diced tomatoes, undrained',
'1 (8 ounce) can tomato sauce',
'½ cup water',
'2 teaspoons sambal oelek chili paste',
'½ teaspoon salt',
'½ teaspoon freshly ground black pepper',
'2 large bell peppers, any color - cut in half lengthwise, cored, and seeded',
'4 (1 inch) cubes Colby-Jack cheese',
'aluminum foil',
'⅓ cup shredded Colby-Jack cheese',
'4 teaspoons reduced-fat sour cream',
'8 slices pickled jalapeno peppers (Optional)'
        ],
        directions: [
            'Preheat the oven to 375 degrees F (190 degrees C). Spray a baking dish with cooking spray.',
            'Heat olive oil in a large skillet over medium heat. Stir in ground turkey, onion, jalapeno, and garlic. Cook and stir until turkey browns and vegetables are tender, 8 to 10 minutes. Drain grease from the skillet. Add frozen riced cauliflower, tomatoes, tomato sauce, water, chili paste, salt, and pepper; stir until well incorporated. Reduce heat and simmer for 5 minutes.',
'Place bell pepper halves in the prepared baking dish. Place 1 Colby-Jack cheese cube in each pepper half, and fill with turkey mixture. Spoon remaining turkey mixture into the dish around the peppers.',
'Cover dish with aluminum foil, and bake in the preheated oven for 30 minutes. Remove foil and sprinkle each pepper with shredded Colby-Jack cheese. Bake, uncovered, until peppers are soft and cheese has melted, about 10 minutes more.',
'To serve, spoon a little turkey mixture onto a plate, and place a bell pepper half on top of it. Top each serving with 1 teaspoon sour cream and 2 jalapeno slices.'
        ],
        additionalNote: "Be careful not to use too high of a temperature or the paprika-maple mixture will burn.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2020-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    },
    {
        id: 'r7',
        title: 'Royal Icing',
        description: 'Perfect icing for your gingerbread houses!',
        postedBy: {
            id: 'u3',
            name: 'Lucas'
        },
        images: [
            'https://images.unsplash.com/photo-1601582595900-c3e816e6e9e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aWNpbmclMjBjb29raWVzfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1585419960497-ec7d3d934460?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNpbmclMjBjb29raWVzfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1588974328642-c4a1857fee9d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aWNpbmclMjBjb29raWVzfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1606592949193-12f27bd6b7a0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aWNpbmclMjBjb29raWVzfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1515265705-cbcc6e6ba264?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aWNpbmclMjBjb29raWVzfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1588195547116-6a514230c4ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aWNpbmclMjBjb29raWVzfGVufDB8fDB8&ixlib=rb-1.2.1'
        ],
        ingredients: [
            '4 egg whites',
            "4 cups sifted confectioners' sugar",
            '1 teaspoon lemon extract'
        ],
        directions: [
            'Beat egg whites in a clean, large bowl with mixer at high speed until foamy (use only grade A clean, uncracked eggs). Gradually add sugar and lemon extract. Beat at high speed until thickened.'
        ],
        additionalNote: "When dry, royal icing is very hard and resistant to damage that can occur during shipping/handling.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2020-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    },
    {
        id: 'r8',
        title: 'Spicy Hot Chicken Legs',
        description: 'This is just like spicy chicken wings, only less work. Cooks up nicely in the slow cooker! A quick meal that is super easy and oh so yummy! For crispier chicken, bake in a 400 degrees F oven for the final 30 minutes.',
        postedBy: {
            id: 'u4',
            name: 'Martin'
        },
        images: [
            'https://images.unsplash.com/photo-1588767768106-1b20e51d9d68?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGxlZ3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1542706133547-2b957ec7ee5e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjBtZWF0fGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBtZWF0fGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1599161146640-8d60bd2888e3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWNrZW4lMjBtZWF0fGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1514536958296-436f46226e74?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNoaWNrZW4lMjBtZWF0fGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1580741872002-5e300802d690?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGNoaWNrZW4lMjBtZWF0fGVufDB8fDB8&ixlib=rb-1.2.1'
        ],
        ingredients: [
            '12 chicken drumsticks',
            "1 (5 ounce) bottle hot red pepper sauce",
            '¼ cup butter, cubed',
'½ teaspoon garlic powder',
'½ teaspoon onion powder',
'salt and pepper to taste',
'1 ½ cups blue cheese salad dressing'
        ],
        directions: [
            'Place the drumsticks in a slow cooker, and sprinkle evenly with pieces of butter. Pour the hot sauce over the chicken, then season with garlic powder, onion powder, salt and pepper. Cover, and cook on High for 3 hours, or until tender. Serve chicken legs with blue cheese dressing on the side.'
        ],
        additionalNote: "When dry, royal icing is very hard and resistant to damage that can occur during shipping/handling.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2020-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    },
    {
        id: 'r9',
        title: 'Firecracker Fried Chicken Drumsticks',
        description: 'I found this recipe a while back and had to try it. My husband and I fell in love with it. He has to have it at least twice a week. Sometimes I use boneless, skinless chicken breast in place of the drumsticks--the breasts take less cooking time. Enjoy!',
        postedBy: {
            id: 'u4',
            name: 'Martin'
        },
        images: [
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8',
            'https://images.unsplash.com/photo-1585627990987-58ef59c709e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1571162437205-8889ff2fee26?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1535902491948-06a40e45ed95?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1600891965050-6da6bad77c3f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaWNrZW4lMjB3aW5nc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1'
        ],
        ingredients: [
            '8 chicken drumsticks',
            "¼ cup hot pepper sauce",
            '⅓ cup all-purpose flour',
'2 tablespoons yellow cornmeal',
'½ teaspoon salt',
'3 cups vegetable oil for frying'
        ],
        directions: [
            'Remove skin from chicken and place in a resealable plastic bag. Pour sauce over chicken, seal bag, and refrigerate to marinate for at least 1 hour, up to 24 hours. The longer the chicken marinates, the spicier it will be.',
'Heat oil in a deep-fryer or large skillet to 350 degrees F (175 degrees C).',
'Combine the flour, cornmeal, and salt in another resealable plastic bag. Add the drumsticks, seal bag, and shake to coat.',
'Fry the chicken, uncovered, for 25 to 30 minutes or until juices run clear. Turn occasionally to brown evenly.'
        ],
        additionalNote: "When dry, royal icing is very hard and resistant to damage that can occur during shipping/handling.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2020-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    },
    {
        id: 'r10',
        title: 'Thai Red Curry Chicken Soup',
        description: 'Red curry chicken is a family favorite so I adapted it into a soup. That way you never miss any of the delicious sauce!',
        postedBy: {
            id: 'u4',
            name: 'Martin'
        },
        images: [
            'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c291cHxlbnwwfHwwfA%3D%3D',
            'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c291cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1541095441899-5d96a6da10b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c291cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1578861256505-d3be7cb037d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c291cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1469307517101-0b99d8fb0c33?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c291cHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1',
            'https://images.unsplash.com/photo-1584003397078-45ef96d6174d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvdXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1'
        ],
        ingredients: [
            '2 tablespoons red curry paste',
            "1 red bell pepper, thinly sliced",
            '1 small onion, chopped',
'1 (14 ounce) can coconut milk',
'1 tablespoon fish sauce',
'3 cups homemade chicken stock',
'2 cups shredded cooked chicken',
'4 tablespoons chopped fresh cilantro',
'1 ½ cups cooked basmati rice'
        ],
        directions: [
            'Cook curry paste in a large, heavy saucepan over medium-high heat until oils start to release, 1 to 2 minutes. Add red pepper and onion and cook, stirring, until softened, about 5 minutes. Stir in coconut milk until well blended. Add fish sauce, and then chicken stock.',
'Reduce heat to low and simmer for 15 minutes. Add cooked chicken and rice. Stir over heat until warmed through. Add chopped cilantro right before serving.'
        ],
        additionalNote: "When dry, royal icing is very hard and resistant to damage that can occur during shipping/handling.",
        comments: [{
            commentedBy: {
                id: 'u1',
                name: 'Alex',
            },
            content: 'Great recipe! I didn t have any cheese so I grilled a T-bone steak on my gas grill then I pretended it was a grilled cheese sandwich! Delicious!',
            commentedOn:"2020-12-06T07:50:03.938Z"
        },
        {
            commentedBy: {
                id: 'u2',
                name: 'Daniel',
            },
            content: "A great way to cut a few calories is by using the Crisco spray butter --- it's just like Pam but has a great buttery flavor! Served with creamy tomato basil soup and you have the perfect winter lunch!",
            commentedOn:"2020-12-06T07:50:03.938Z"
        }],
        createdAt: "2020-12-06T07:50:03.938Z"
    }
]
export default recipe
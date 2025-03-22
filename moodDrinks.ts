export interface Brand {
    name: string
    description: string
  }
  
  export interface Drink {
    name: string
    description: string
    longDescription: string
    image: string
    brands: Brand[]
    recipe: string[]
    instructions: string[]
    alcoholic: boolean
  }
  
  export interface MoodCategory {
    icon: string
    drinks: Drink[]
  }
  
  export const moodDrinks: Record<string, MoodCategory> = {
    happy: {
      icon: "emoticon-happy-outline",
      drinks: [
        {
          name: "Mojito",
          description: "A refreshing mix of rum, mint, and lime",
          longDescription:
            "The Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.",
          image:
            "https://images.unsplash.com/photo-1509448613959-44d527dd5d86?q=80&w=2870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Havana Club", description: "Authentic Cuban rum" },
            { name: "Bacardi", description: "Popular white rum brand" },
            { name: "Captain Morgan", description: "Well-known rum brand" },
          ],
          recipe: [
            "2 oz white rum",
            "1 oz fresh lime juice",
            "1 oz simple syrup",
            "8-10 fresh mint leaves",
            "Soda water",
          ],
          instructions: [
            "Muddle mint leaves with simple syrup in a glass",
            "Add rum, lime juice, and ice",
            "Stir well",
            "Top with soda water",
            "Garnish with mint sprig and lime wheel",
          ],
          alcoholic: true,
        },
        {
          name: "Margarita",
          description: "A zesty blend of tequila, lime, and salt",
          longDescription:
            "The Margarita is a Mexican-inspired cocktail made with tequila, lime, and triple sec. It's often served with salt on the rim of the glass.",
          image:
            "https://images.unsplash.com/photo-1678862656501-9bd5d0bf6de1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Patrón", description: "Premium tequila brand" },
            { name: "Don Julio", description: "High-quality tequila" },
            { name: "Jose Cuervo", description: "Well-known tequila brand" },
          ],
          recipe: ["2 oz tequila", "1 oz lime juice", "1 oz triple sec", "Salt for rimming"],
          instructions: [
            "Rim glass with salt",
            "Combine tequila, lime juice, and triple sec in a shaker with ice",
            "Shake well",
            "Strain into the prepared glass",
            "Garnish with a lime wheel",
          ],
          alcoholic: true,
        },
        {
          name: "Pina Colada",
          description: "A tropical fusion of rum, coconut, and pineapple",
          longDescription:
            "The Piña Colada is a sweet cocktail made with rum, coconut cream, and pineapple juice. It's often served blended or shaken with ice.",
          image:
            "https://images.unsplash.com/photo-1490324120634-0fa86c62d6c1?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
          brands: [
            { name: "Malibu", description: "Coconut flavored rum" },
            { name: "Bacardi", description: "Popular white rum brand" },
            { name: "Captain Morgan", description: "Well-known rum brand" },
          ],
          recipe: ["2 oz white rum", "2 oz coconut cream", "2 oz pineapple juice", "1 cup crushed ice"],
          instructions: [
            "Combine all ingredients in a blender",
            "Blend until smooth",
            "Pour into a tall glass",
            "Garnish with a pineapple wedge and cherry",
          ],
          alcoholic: true,
        },
      ],
    },
    relaxed: {
      icon: "weather-night",
      drinks: [
        {
          name: "Red Wine",
          description: "A smooth, full-bodied red to unwind",
          longDescription:
            "Red wine is made from dark-colored grape varieties. It's rich in antioxidants and can have complex flavors depending on the grape and aging process.",
          image:
            "https://images.unsplash.com/photo-1601924381523-019b78541b95?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Cabernet Sauvignon", description: "Full-bodied red wine" },
            { name: "Merlot", description: "Smooth, medium-bodied red wine" },
            { name: "Pinot Noir", description: "Light to medium-bodied red wine" },
          ],
          recipe: ["Pour 5 oz of red wine into a wine glass"],
          instructions: [
            "Choose your preferred red wine",
            "Open the bottle and let it breathe for a few minutes",
            "Pour into a wine glass",
            "Swirl gently and enjoy",
          ],
          alcoholic: true,
        },
        {
          name: "Whiskey Neat",
          description: "Pure, unadulterated whiskey for sipping",
          longDescription:
            "Whiskey neat refers to a straight pour of whiskey into a glass, served at room temperature without ice, water, or any mixer.",
          image:
            "https://images.unsplash.com/photo-1605806629664-1a050df0a913?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Johnnie Walker Black Label", description: "Blended Scotch whisky" },
            { name: "Glenfiddich 12 Year", description: "Single malt Scotch whisky" },
            { name: "Macallan 12 Year", description: "Highland single malt Scotch whisky" },
          ],
          recipe: ["Pour 2 oz of whiskey into a whiskey glass"],
          instructions: [
            "Choose your preferred whiskey",
            "Pour into a whiskey glass",
            "Let it sit for a moment to open up",
            "Sip and savor slowly",
          ],
          alcoholic: true,
        },
        {
          name: "Chamomile Tea",
          description: "A soothing herbal infusion for ultimate relaxation",
          longDescription:
            "Chamomile tea is an herbal tea made from dried chamomile flowers. It's known for its calming properties and is often consumed before bedtime.",
          image:
            "https://images.unsplash.com/photo-1652620386215-d7aaf6edf856?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Twinings", description: "Well-known tea brand" },
            { name: "Celestial Seasonings", description: "Popular herbal tea brand" },
            { name: "Harney & Sons", description: "Premium tea brand" },
          ],
          recipe: ["1 chamomile tea bag", "1 cup hot water", "Optional: honey or lemon to taste"],
          instructions: [
            "Boil water",
            "Place tea bag in a mug",
            "Pour hot water over the tea bag",
            "Steep for 3-5 minutes",
            "Remove tea bag and add honey or lemon if desired",
          ],
          alcoholic: false,
        },
      ],
    },
    energetic: {
      icon: "lightning-bolt",
      drinks: [
        {
          name: "Espresso Martini",
          description: "A caffeinated cocktail to spark your night",
          longDescription:
            "The Espresso Martini is a cold, coffee-flavored cocktail made with vodka, espresso coffee, coffee liqueur, and sugar syrup. It's rich, indulgent, and the perfect pick-me-up for a night out.",
          image:
            "https://images.unsplash.com/photo-1607805043580-a37c1540c5dd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Kahlúa", description: "A coffee liqueur that adds richness and depth" },
            { name: "Absolut Vodka", description: "A smooth vodka that blends well with coffee flavors" },
            { name: "Mr Black Coffee Liqueur", description: "An Australian coffee liqueur with a strong coffee kick" },
            { name: "Tia Maria", description: "Another popular coffee liqueur option" },
            { name: "Grey Goose Vodka", description: "A premium vodka for a luxurious Espresso Martini" },
          ],
          recipe: [
            "2 oz vodka",
            "1 oz fresh espresso",
            "3/4 oz coffee liqueur",
            "1/4 oz simple syrup (optional)",
            "Coffee beans for garnish",
          ],
          instructions: [
            "Fill a shaker with ice",
            "Add vodka, fresh espresso, coffee liqueur, and simple syrup",
            "Shake vigorously for about 20 seconds",
            "Strain into a chilled martini glass",
            "Garnish with three coffee beans",
          ],
          alcoholic: true,
        },
        {
          name: "Red Bull Vodka",
          description: "A high-octane mix of energy drink and vodka",
          longDescription:
            "Red Bull Vodka is a popular cocktail that combines the stimulating effects of an energy drink with the relaxing properties of vodka. It's known for providing a burst of energy.",
          image:
            "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Red Bull", description: "Popular energy drink" },
            { name: "Grey Goose", description: "Premium vodka brand" },
            { name: "Smirnoff", description: "Well-known vodka brand" },
          ],
          recipe: ["2 oz vodka", "1 can Red Bull energy drink"],
          instructions: [
            "Fill a highball glass with ice",
            "Pour in vodka",
            "Top with Red Bull",
            "Stir gently to combine",
            "Garnish with a lemon wedge if desired",
          ],
          alcoholic: true,
        },
        {
          name: "Long Island Iced Tea",
          description: "A potent blend of multiple spirits",
          longDescription:
            "The Long Island Iced Tea is a type of alcoholic mixed drink typically made with vodka, tequila, light rum, triple sec, gin, and a splash of cola. Despite its name, the drink contains no tea.",
          image:
            "https://images.unsplash.com/photo-1495221521568-8b714b2cb6fd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Absolut Vodka", description: "Swedish vodka brand" },
            { name: "Bacardi Rum", description: "Popular white rum" },
            { name: "Jose Cuervo Tequila", description: "Well-known tequila brand" },
          ],
          recipe: [
            "1/2 oz vodka",
            "1/2 oz white rum",
            "1/2 oz gin",
            "1/2 oz tequila",
            "1/2 oz triple sec",
            "1 oz fresh lemon juice",
            "1 oz simple syrup",
            "Cola to top",
          ],
          instructions: [
            "Fill a cocktail shaker with ice",
            "Add all ingredients except cola",
            "Shake well for about 10 seconds",
            "Strain into a highball glass filled with ice",
            "Top with a splash of cola",
            "Garnish with a lemon wedge",
          ],
          alcoholic: true,
        },
      ],
    },
    sad: {
      icon: "emoticon-sad-outline",
      drinks: [
        {
          name: "Hot Chocolate",
          description: "A warm, comforting cocoa hug",
          longDescription:
            "Hot chocolate is a warm beverage made from shaved chocolate, melted chocolate or cocoa powder, heated milk or water, and sugar. It's often topped with whipped cream or marshmallows.",
          image:
            "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Ghirardelli", description: "Premium chocolate brand" },
            { name: "Godiva", description: "Luxury Belgian chocolate" },
            { name: "Swiss Miss", description: "Popular instant hot chocolate mix" },
          ],
          recipe: [
            "2 tbsp unsweetened cocoa powder",
            "1-2 tbsp sugar (to taste)",
            "Pinch of salt",
            "1 cup milk",
            "1/4 tsp vanilla extract (optional)",
            "Whipped cream or marshmallows (optional)",
          ],
          instructions: [
            "In a saucepan, whisk together cocoa powder, sugar, and salt",
            "Gradually add milk while whisking to combine",
            "Heat over medium heat, stirring frequently, until hot",
            "Remove from heat and stir in vanilla extract if using",
            "Pour into a mug and top with whipped cream or marshmallows if desired",
          ],
          alcoholic: false,
        },
        {
          name: "Warm Milk with Honey",
          description: "A soothing, sweet classic",
          longDescription:
            "Warm milk with honey is a simple, comforting drink often used as a natural sleep aid. The combination of warm milk and honey is believed to have calming properties.",
          image:
            "https://images.unsplash.com/photo-1601740982032-f7f00107676c?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Local organic milk", description: "Fresh, high-quality milk" },
            { name: "Manuka honey", description: "Premium honey with potential health benefits" },
            { name: "Wildflower honey", description: "Flavorful honey from various flower sources" },
          ],
          recipe: ["1 cup milk", "1-2 tsp honey", "Optional: pinch of cinnamon or nutmeg"],
          instructions: [
            "Heat milk in a small saucepan over medium heat until warm",
            "Remove from heat and stir in honey until dissolved",
            "Pour into a mug",
            "Sprinkle with cinnamon or nutmeg if desired",
            "Enjoy while warm",
          ],
          alcoholic: false,
        },
        {
          name: "Herbal Tea",
          description: "A calming blend of herbs to lift your spirits",
          longDescription:
            "Herbal tea is a caffeine-free infusion made from various herbs, flowers, and spices. Different blends can offer various benefits, from relaxation to mood enhancement.",
          image:
            "https://images.unsplash.com/photo-1630543378528-10043e324452?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Yogi Tea", description: "Ayurvedic-inspired herbal tea blends" },
            { name: "Traditional Medicinals", description: "Wellness-focused herbal teas" },
            { name: "Pukka", description: "Organic herbal teas with unique blends" },
          ],
          recipe: ["1 herbal tea bag or 1 tsp loose herbal tea", "1 cup hot water", "Optional: honey or lemon to taste"],
          instructions: [
            "Boil water and let it cool for a minute",
            "Place tea bag or loose tea in a mug",
            "Pour hot water over the tea",
            "Steep for 5-7 minutes, or according to package instructions",
            "Remove tea bag or strain loose tea",
            "Add honey or lemon if desired",
          ],
          alcoholic: false,
        },
      ],
    },
    stressed: {
      icon: "water-outline",
      drinks: [
        {
          name: "Green Tea",
          description: "A zen-inducing cup of antioxidants",
          longDescription:
            "Green tea is a type of tea made from Camellia sinensis leaves that have not undergone the same withering and oxidation process used to make oolong and black tea. It's known for its health benefits and calming properties.",
          image:
            "https://images.unsplash.com/photo-1711602926021-db8bce24843a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Sencha", description: "Popular Japanese green tea" },
            { name: "Gyokuro", description: "High-grade, shaded green tea" },
            { name: "Matcha", description: "Finely ground green tea powder" },
          ],
          recipe: [
            "1 tsp green tea leaves or 1 green tea bag",
            "1 cup water (175°F/80°C)",
            "Optional: honey or lemon to taste",
          ],
          instructions: [
            "Heat water to 175°F/80°C (just before boiling)",
            "Place tea leaves in a teapot or tea bag in a mug",
            "Pour hot water over the tea",
            "Steep for 1-3 minutes, depending on desired strength",
            "Strain leaves or remove tea bag",
            "Add honey or lemon if desired",
          ],
          alcoholic: false,
        },
        {
          name: "Lavender Latte",
          description: "A calming, floral coffee experience",
          longDescription:
            "A Lavender Latte is a soothing coffee drink that combines espresso with steamed milk and lavender syrup. The floral notes of lavender pair well with the rich coffee, creating a unique and relaxing beverage.",
          image:
            "https://images.unsplash.com/photo-1594056913352-519eeb0a2f0f?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Homemade", description: "DIY lavender syrup for a personalized touch" },
            { name: "Local cafe specialty", description: "Unique blends from local coffee shops" },
            { name: "Lavender syrup brands", description: "Commercial lavender syrups for consistency" },
          ],
          recipe: [
            "1 shot espresso or 1/2 cup strong brewed coffee",
            "1 cup milk (dairy or plant-based)",
            "1-2 tbsp lavender syrup",
            "Dried lavender buds for garnish (optional)",
          ],
          instructions: [
            "Brew espresso or strong coffee",
            "Steam milk until frothy",
            "In a mug, combine espresso and lavender syrup",
            "Pour steamed milk over the coffee, holding back the foam",
            "Spoon milk foam on top",
            "Garnish with dried lavender buds if desired",
          ],
          alcoholic: false,
        },
        {
          name: "Cucumber Water",
          description: "A refreshing, hydrating stress-reliever",
          longDescription:
            "Cucumber water is a simple, refreshing drink made by infusing water with fresh cucumber slices. It's known for its hydrating properties and subtle, crisp flavor that can help reduce stress and promote relaxation.",
          image:
            "https://images.unsplash.com/photo-1527499861446-cc219aea45ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Homemade", description: "Freshly made cucumber water" },
            { name: "Hint", description: "Flavored water brand with cucumber option" },
            { name: "Spindrift", description: "Sparkling water with real cucumber" },
          ],
          recipe: ["1/2 cucumber, thinly sliced", "4 cups cold water", "Optional: fresh mint leaves or lemon slices"],
          instructions: [
            "Wash cucumber thoroughly and slice thinly",
            "Place cucumber slices in a pitcher",
            "Add mint leaves or lemon slices if using",
            "Fill the pitcher with cold water",
            "Refrigerate for at least 1 hour to infuse",
            "Serve over ice and enjoy",
          ],
          alcoholic: false,
        },
      ],
    },
    romantic: {
      icon: "heart-outline",
      drinks: [
        {
          name: "Champagne",
          description: "Bubbly elegance for special moments",
          longDescription:
            "Champagne is a sparkling wine produced from grapes grown in the Champagne region of northeastern France. It's associated with luxury and celebration, making it perfect for romantic occasions.",
          image:
            "https://images.unsplash.com/photo-1546567075-d7113bee3c4a?q=80&w=2897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Moët & Chandon", description: "Renowned Champagne house" },
            { name: "Veuve Clicquot", description: "Prestigious Champagne brand" },
            { name: "Dom Pérignon", description: "Luxury vintage Champagne" },
          ],
          recipe: ["Chill Champagne bottle for at least 3 hours"],
          instructions: [
            "Remove Champagne from refrigerator",
            "Carefully remove the foil and wire cage",
            "Hold the bottle at a 45-degree angle",
            "Slowly twist the bottle, not the cork, until it releases with a gentle hiss",
            "Pour into fluted Champagne glasses",
            "Serve immediately to enjoy the bubbles",
          ],
          alcoholic: true,
        },
        {
          name: "Rosé Wine",
          description: "A pink, fruity wine for romantic evenings",
          longDescription:
            "Rosé wine is a type of wine that incorporates some of the color from the grape skins, but not enough to qualify it as a red wine. It's known for its pink color and refreshing taste, perfect for romantic settings.",
          image:
            "https://images.unsplash.com/photo-1660814807174-85a4ce3af9ea?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Whispering Angel", description: "Popular Provence rosé" },
            { name: "Miraval", description: "Elegant rosé from Provence" },
            { name: "La Vieille Ferme", description: "Affordable, quality rosé" },
          ],
          recipe: ["Chill rosé wine for 2-3 hours before serving"],
          instructions: [
            "Remove rosé from refrigerator",
            "Open the bottle",
            "Pour into wine glasses, filling about 1/3 full",
            "Serve and enjoy at a temperature between 50-60°F (10-15°C)",
          ],
          alcoholic: true,
        },
        {
          name: "Whiskey Cocktail",
          description: "A sophisticated blend for a romantic night",
          longDescription:
            "A whiskey cocktail can be a variety of mixed drinks with whiskey as the primary ingredient. For a romantic setting, consider a classic like an Old Fashioned or a Manhattan, which offer a perfect balance of flavors.",
          image:
            "https://images.unsplash.com/photo-1514362453360-8f94243c9996?q=80&w=2726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Jack Daniel's Honey", description: "Smooth, honey-flavored whiskey" },
            { name: "Maker's Mark", description: "Premium Kentucky bourbon" },
            { name: "Woodford Reserve", description: "Craft Kentucky bourbon" },
          ],
          recipe: ["2 oz whiskey", "1/4 oz simple syrup", "2-3 dashes Angostura bitters", "Orange peel for garnish"],
          instructions: [
            "In a mixing glass, combine whiskey, simple syrup, and bitters",
            "Add ice and stir until well-chilled",
            "Strain into a rocks glass over a large ice cube",
            "Express the oils of an orange peel over the drink",
            "Garnish with the orange peel and serve",
          ],
          alcoholic: true,
        },
      ],
    },
    excited: {
      icon: "fire",
      drinks: [
        {
          name: "Cosmopolitan",
          description: "A vibrant, fruity cocktail perfect for celebrations",
          longDescription:
            "The Cosmopolitan is a vodka-based cocktail that combines the kick of citrus with the sweetness of cranberry. It's a perfect drink for those exciting moments when you want to celebrate life.",
          image:
            "https://images.unsplash.com/photo-1648231837322-ff07105b26f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Absolut Citron", description: "A citrus-flavored vodka that forms the base of a great Cosmo" },
            { name: "Cointreau", description: "An orange-flavored triple sec that adds depth to the cocktail" },
            { name: "Ocean Spray Cranberry Juice", description: "The classic choice for the fruity component" },
          ],
          recipe: [
            "1.5 oz citrus vodka",
            "1 oz cranberry juice",
            "0.5 oz fresh lime juice",
            "0.5 oz triple sec",
            "Orange twist for garnish",
          ],
          instructions: [
            "Fill a cocktail shaker with ice",
            "Add vodka, cranberry juice, lime juice, and triple sec",
            "Shake well for about 20 seconds",
            "Strain into a chilled martini glass",
            "Garnish with an orange twist",
          ],
          alcoholic: true,
        },
        {
          name: "Champagne Cocktail",
          description: "A bubbly, elegant drink for joyous occasions",
          longDescription:
            "A Champagne Cocktail is a classic drink that adds a touch of sweetness and complexity to traditional Champagne. It's perfect for celebrations and adds a festive touch to any exciting event.",
          image:
            "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Moët & Chandon", description: "Renowned Champagne house" },
            { name: "Veuve Clicquot", description: "Prestigious Champagne brand" },
            { name: "Dom Pérignon", description: "Luxury vintage Champagne" },
          ],
          recipe: ["1 sugar cube", "2-3 dashes Angostura bitters", "Chilled Champagne", "Lemon twist for garnish"],
          instructions: [
            "Place a sugar cube in a Champagne flute",
            "Dash Angostura bitters onto the sugar cube",
            "Slowly fill the glass with chilled Champagne",
            "Garnish with a lemon twist",
            "Serve immediately and enjoy the bubbles",
          ],
          alcoholic: true,
        },
        {
          name: "Sangria",
          description: "A fruity, wine-based punch perfect for parties",
          longDescription:
            "Sangria is a Spanish-origin punch that typically consists of red wine and chopped fruit, often with other ingredients such as orange juice or brandy. It's a refreshing and festive drink ideal for excited gatherings.",
          image:
            "https://images.unsplash.com/photo-1617641326660-164119fdbdfd?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Rioja red wine", description: "Traditional Spanish wine for authentic sangria" },
            { name: "Triple sec", description: "Orange-flavored liqueur to enhance fruitiness" },
            { name: "Fresh seasonal fruits", description: "For added flavor and visual appeal" },
          ],
          recipe: [
            "1 bottle red wine",
            "1/4 cup brandy",
            "1/4 cup orange juice",
            "2 tbsp sugar",
            "Assorted chopped fruits (oranges, apples, peaches)",
            "1 cup sparkling water (optional)",
          ],
          instructions: [
            "In a large pitcher, combine wine, brandy, orange juice, and sugar",
            "Stir until sugar dissolves",
            "Add chopped fruits",
            "Refrigerate for at least 2 hours or overnight",
            "Before serving, add sparkling water if desired",
            "Serve over ice and enjoy",
          ],
          alcoholic: true,
        },
      ],
    },
    melancholy: {
      icon: "weather-pouring",
      drinks: [
        {
          name: "Irish Coffee",
          description: "A warming blend of coffee and whiskey",
          longDescription:
            "Irish Coffee is a cocktail of hot coffee, Irish whiskey, and sugar, stirred, and topped with cream. It's the perfect drink for a rainy day or when you're feeling a bit blue.",
          image:
            "https://images.unsplash.com/photo-1549057219-0c0be1287566?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Jameson Irish Whiskey", description: "A smooth whiskey that blends well with coffee" },
            { name: "Bushmill's Original", description: "Another great Irish whiskey option" },
            { name: "Lavazza coffee", description: "A rich, full-bodied coffee to form the base" },
          ],
          recipe: [
            "1 cup hot brewed coffee",
            "1 tablespoon brown sugar",
            "1.5 oz Irish whiskey",
            "Lightly whipped cream",
          ],
          instructions: [
            "Fill a mug with hot water to preheat it, then empty",
            "Pour hot coffee into the warmed mug until it's about 3/4 full",
            "Add brown sugar and stir until completely dissolved",
            "Blend in Irish whiskey",
            "Top with a collar of lightly whipped cream",
            "Serve hot",
          ],
          alcoholic: true,
        },
        {
          name: "Hot Toddy",
          description: "A soothing, warm cocktail with whiskey and honey",
          longDescription:
            "A Hot Toddy is a mixed drink made of liquor and water with honey, herbs, and spices, served hot. It's often used as a cold remedy and is perfect for comforting on melancholy days.",
          image:
            "https://images.unsplash.com/photo-1676037882407-d3ac62533c26?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Glenlivet", description: "Smooth Scotch whisky" },
            { name: "Honey", description: "Local or organic honey for best flavor" },
            { name: "Lemon", description: "Fresh lemon for citrus notes" },
          ],
          recipe: [
            "2 oz whiskey",
            "1 tbsp honey",
            "1/2 oz lemon juice",
            "1 cup hot water",
            "Cinnamon stick and lemon wheel for garnish",
          ],
          instructions: [
            "In a mug, combine whiskey and honey",
            "Add hot water and stir until honey is dissolved",
            "Add lemon juice and stir",
            "Garnish with a cinnamon stick and lemon wheel",
            "Serve hot and sip slowly",
          ],
          alcoholic: true,
        },
        {
          name: "Mulled Wine",
          description: "A comforting, spiced wine perfect for cold days",
          longDescription:
            "Mulled wine is a warm, spiced wine typically made with red wine along with various mulling spices and sometimes raisins. It's a traditional drink during winter, especially around Christmas.",
          image:
            "https://images.unsplash.com/photo-1542143708653-1a0d78f64f21?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Merlot", description: "Full-bodied red wine as a base" },
            { name: "Cinnamon sticks", description: "For aromatic spice" },
            { name: "Cloves", description: "Adds warmth and depth to the flavor" },
          ],
          recipe: [
            "1 bottle red wine",
            "1 orange, sliced",
            "1/4 cup brandy",
            "1/4 cup honey or sugar",
            "2 cinnamon sticks",
            "2 star anise",
            "4 cloves",
          ],
          instructions: [
            "In a large pot, combine all ingredients",
            "Heat on low until warm (do not boil)",
            "Simmer for at least 15 minutes",
            "Strain and serve in mugs",
            "Garnish with orange slices and cinnamon sticks",
          ],
          alcoholic: true,
        },
      ],
    },
    adventurous: {
      icon: "compass-outline",
      drinks: [
        {
          name: "Mezcal Negroni",
          description: "A smoky twist on the classic Negroni",
          longDescription:
            "The Mezcal Negroni is an adventurous take on the classic cocktail, replacing gin with smoky mezcal. It's perfect for those looking to explore new flavor territories.",
          image:
            "https://images.unsplash.com/photo-1542849187-5ec6ea5e6a27?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Del Maguey Vida Mezcal", description: "A balanced mezcal with the right amount of smokiness" },
            { name: "Campari", description: "The classic bitter component of a Negroni" },
            { name: "Carpano Antica Formula", description: "A rich, complex sweet vermouth" },
          ],
          recipe: ["1 oz mezcal", "1 oz Campari", "1 oz sweet vermouth", "Orange peel for garnish"],
          instructions: [
            "Fill a mixing glass with ice",
            "Add mezcal, Campari, and sweet vermouth",
            "Stir well for about 30 seconds",
            "Strain into a rocks glass filled with ice",
            "Garnish with an orange peel",
          ],
          alcoholic: true,
        },
        {
          name: "Pisco Sour",
          description: "A South American cocktail with a unique flavor profile",
          longDescription:
            "The Pisco Sour is the national drink of Peru, made with Pisco (a type of brandy), lime juice, syrup, egg white, and bitters. It's known for its frothy texture and balanced sweet-sour taste.",
          image:
            "https://images.unsplash.com/photo-1696594935685-1ad6ba69e83e?q=80&w=2719&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Pisco Portón", description: "Premium Peruvian pisco" },
            { name: "Fresh lime juice", description: "Essential for the sour component" },
            { name: "Egg white", description: "Creates the signature frothy texture" },
          ],
          recipe: [
            "2 oz Pisco",
            "1 oz fresh lime juice",
            "3/4 oz simple syrup",
            "1 egg white",
            "Angostura bitters for garnish",
          ],
          instructions: [
            "Add all ingredients except bitters to a shaker without ice",
            "Dry shake vigorously to emulsify the egg white",
            "Add ice and shake again until well-chilled",
            "Strain into a chilled coupe glass",
            "Garnish with a few drops of Angostura bitters",
          ],
          alcoholic: true,
        },
        {
          name: "Absinthe Drip",
          description: "The traditional way to enjoy the 'Green Fairy'",
          longDescription:
            "Absinthe is a highly alcoholic spirit derived from wormwood and other herbs. The traditional absinthe drip involves slowly diluting the spirit with ice-cold water over a sugar cube, creating a cloudy, flavorful drink.",
          image:
            "https://images.unsplash.com/photo-1600110078121-d6f5d7797b7b?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          brands: [
            { name: "Pernod Absinthe", description: "Classic French absinthe" },
            { name: "Sugar cube", description: "For sweetening and enhancing flavors" },
            { name: "Ice water", description: "For diluting and 'louching' the absinthe" },
          ],
          recipe: ["1 oz absinthe", "1 sugar cube", "3-4 oz ice-cold water"],
          instructions: [
            "Pour absinthe into a glass",
            "Place a slotted absinthe spoon on top of the glass",
            "Put a sugar cube on the spoon",
            "Slowly drip ice-cold water over the sugar cube",
            "Watch as the absinthe louches (turns cloudy)",
            "Stir to dissolve any remaining sugar",
            "Enjoy responsibly",
          ],
          alcoholic: true,
        },
      ],
    },
  }
  
  export type Mood = keyof typeof moodDrinks
  
  

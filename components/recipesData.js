// if i was using SQL data base this would be a dto file with witch i would compare and use to transfer files to the base, the ingredients would use a virtual key to recipes (many to many)
const recipesData = [
      {
          id:1,
          name:"Bla bla",
          link:"some link",
          numberOFingredients:5,
          ingredients: [ 
              {
                  ingredient:"meat",
                  quantity:"100g"
              },
              {
                  ingredient:"milk",
                  quantity:"500ml"
              }
          ],
          instructions:"Do this do that, add this add that",
          prepTimeHours:1,
          prepTimeMin:15
      },
      {
        id:2,
        name:"Drn drn",
        link:"some link",
        numberOFingredients:2,
        ingredients:[ 
            {
                ingredient:"eggs",
                quantity:"4"
            },
            {
                ingredient:"flour",
                quantity:"500g"
            }
        ],
        instructions:"Do this do that, add this add that",
        prepTimeHours:0,
        prepTimeMin:30
    },

]

export default recipesData

const Page = () => (
  <main>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="assets/images/image-omelette.jpeg"
      alt="omelette"
      className="heroImage"
    />
    <div className="contentContainer">
      <div className="overviewContainer">
        <h1 className="title">Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="card">
          <div className="title">Preparation time</div>
          <ul className="list">
            <li className="listitem">
              <b>Total</b>: Approximately 10 minutes
            </li>
            <li className="listitem">
              <b>Preparation</b>: 5 minutes
            </li>
            <li className="listitem">
              <b>Cooking</b>: 5 minutes
            </li>
          </ul>
        </div>
        <section id="ingredients">
          <h2 className="title">Ingredients</h2>
          <ul className="list">
            <li className="listitem">2-3 large eggs</li>
            <li className="listitem">Salt, to taste</li>
            <li className="listitem">Pepper, to taste</li>
            <li className="listitem">1 tablespoon of butter or oil</li>
            <li className="listitem">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>
        <section id="instructions">
          <h2 className="title">Instructions</h2>
          <ol className="list">
            <li className="listitem">
              <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li className="listitem">
              <b>Heat the pan</b>: Place a non-stick frying pan over medium heat
              and add butter or oil.
            </li>
            <li className="listitem">
              <b>Cook the omelette</b>: Once the butter is melted and bubbling,
              pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
              surface.
            </li>
            <li className="listitem">
              <b>Add fillings (optional)</b>: When the eggs begin to set at the
              edges but are still slightly runny in the middle, sprinkle your
              chosen fillings over one half of the omelette.
            </li>
            <li className="listitem">
              <b>Fold and serve</b>: As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li className="listitem">
              <b>Enjoy</b>: Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </section>
        <section id="nutrition">
          <h2 className="title">Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  </main>
);

export default Page;

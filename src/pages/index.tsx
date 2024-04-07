const Page = () => (
  <main className="main">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="assets/images/image-omelette.jpeg"
      alt="omelette"
      className="recipeImage"
    />
    <div className="overviewContainer">
      <h1 className="title">Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <div className="card">
        <div className="cardTitle">Preparation time</div>
        <ul className="list">
          <li>
            <span className="listItemHeading">Total</span>: Approximately 10
            minutes
          </li>
          <li>
            <span className="listItemHeading">Preparation</span>: 5 minutes
          </li>
          <li>
            <span className="listItemHeading">Cooking</span>: 5 minutes
          </li>
        </ul>
      </div>

      <section id="ingredients" className="section">
        <h2 className="sectionTitle">Ingredients</h2>
        <ul className="list">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </section>

      <section id="instructions" className="section">
        <h2 className="sectionTitle">Instructions</h2>
        <ol className="list">
          <li>
            <span className="listItemHeading">Beat the eggs</span>: In a bowl,
            beat the eggs with a pinch of salt and pepper until they are well
            mixed. You can add a tablespoon of water or milk for a fluffier
            texture.
          </li>
          <li>
            <span className="listItemHeading">Heat the pan</span>: Place a
            non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li>
            <span className="listItemHeading">Cook the omelette</span>: Once the
            butter is melted and bubbling, pour in the eggs. Tilt the pan to
            ensure the eggs evenly coat the surface.
          </li>
          <li>
            <span className="listItemHeading">Add fillings (optional)</span>:
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </li>
          <li>
            <span className="listItemHeading">Fold and serve</span>: As the
            omelette continues to cook, carefully lift one edge and fold it over
            the fillings. Let it cook for another minute, then slide it onto a
            plate.
          </li>
          <li>
            <span className="listItemHeading">Enjoy</span>: Serve hot, with
            additional salt and pepper if needed.
          </li>
        </ol>
      </section>

      <section id="nutrition" className="section">
        <h2 className="sectionTitle">Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <div className="table">
          <div className="tableRow">Calories</div>
          <div className="tableRow">277kcal</div>
          <div className="tableRow">Carbs</div>
          <div className="tableRow">0g</div>
          <div className="tableRow">Protein</div>
          <div className="tableRow">20g</div>
          <div className="tableRow">Fat</div>
          <div className="tableRow">22g</div>
        </div>
      </section>
    </div>
  </main>
);

export default Page;

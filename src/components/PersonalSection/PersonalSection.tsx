import React from "react";
import './PersonalSection.css'
const PersonalSection = () => {
  return (
    <div className="personal-section">
      <div className="personal-data">
        <h5>Welcome to your personal area.</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          fermentum elit id auctor mollis. Aenean feugiat commodo quam,
          vulputate viverra lorem iaculis in. Curabitur varius commodo lacus
          eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate.
          Nunc blandit nisi lobortis, gravida elit non, tincidunt dolor. Mauris
          ullamcorper suscipit risus, eget dictum dui consequat sed. Nam quis
          orci id dui consectetur elementum. Nulla et lacus massa.
        </p>
      </div>
      <div className="investment-stocks">
        <div className="investment">
          <h3>Investments</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fermentum elit id auctor mollis. Aenean feugiat commodo quam,
            vulputate viverra lorem iaculis in. Curabitur varius commodo lacus
            eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate.
          </p>
        </div>
        <div className="stocks">
            <h3>
            Stocks
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis.
            </p>
            <div className="explore">
            <button > <span>Explore</span>    &#x2192; </button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default PersonalSection;

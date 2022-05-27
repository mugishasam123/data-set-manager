import React, { useState } from 'react';
import { GiGreekTemple } from 'react-icons/gi';
import { BiDotsVerticalRounded, BiDotsHorizontalRounded } from 'react-icons/bi';
import { GoPlusSmall } from 'react-icons/go';

const Portrait = (props) => {
  const [dotsClicked, setDotsClicked] = useState(false);

  const handleDots = () => {
    setDotsClicked(!dotsClicked);
  };

  const handleAddOutcome = () => {
    setDotsClicked(!dotsClicked);

    props.handleForm();
  };

  return (
    <div className="first-part">
      <h1 className="title first">Edit Set</h1>
      <hr />
      <div className="portrait-learner">
        <GiGreekTemple className="temple-icon" />
        <div className="portrait-part">
          <span className="black first">01.Portrait of a Learner</span>
          <p className="second">
            University mission is to discover, preserve and disseminate
            <br />
            knowledge,. to educate the next generation of global citizens,
            {' '}
            <br />
            and to promote a culture of broad inquiry throughout and
            {' '}
            <br />
            beyond the community.
          </p>
          <span className="second">obj1000</span>
          {dotsClicked && (
          <div className="add-outcome" onClick={handleAddOutcome}>
            <GoPlusSmall className="plus" />
            <span>Add OutCome</span>
          </div>
          )}
          {dotsClicked
            ? <BiDotsHorizontalRounded className="three-dots" onClick={handleDots} />
            : <BiDotsVerticalRounded className="three-dots" onClick={handleDots} />}

        </div>

      </div>

    </div>
  );
};

export default Portrait;

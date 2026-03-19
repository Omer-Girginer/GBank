import { useState } from 'react';

const tabs = [
  {
    num: '1',
    label: 'Instant Transfers',
    icon: 'icon-upload',
    header: 'Tranfser money to anyone, instantly! No fees, no BS.',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.`,
  },
  {
    num: '2',
    label: 'Instant Loans',
    icon: 'icon-home',
    header: 'Buy a home or make your dreams come true, with instant loans.',
    text: `Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.`,
  },
  {
    num: '3',
    label: 'Instant Closing',
    icon: 'icon-user-x',
    header: 'No longer need your account? No problem! Close it instantly.',
    text: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.`,
  },
];

const Operations = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <section className="section" id="section--2">
      <div className="section__title">
        <h2 className="section__description">Operations</h2>
        <h3 className="section__header">
          Everything as simple as possible, but no simpler.
        </h3>
      </div>

      <div className="operations">
        <div className="operations__tab-container">
          {tabs.map((tab) => (
            <button
              key={tab.num}
              className={`btn operations__tab operations__tab--${tab.num} ${
                activeTab === tab.num ? 'operations__tab--active' : ''
              }`}
              onClick={() => setActiveTab(tab.num)}
            >
              <span>0{tab.num}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.num}
            className={`operations__content operations__content--${tab.num} ${
              activeTab === tab.num ? 'operations__content--active' : ''
            }`}
          >
            <div className={`operations__icon operations__icon--${tab.num}`}>
              <svg>
                <use xlinkHref={`img/icons.svg#${tab.icon}`} />
              </svg>
            </div>
            <h5 className="operations__header">{tab.header}</h5>
            <p>{tab.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Operations;
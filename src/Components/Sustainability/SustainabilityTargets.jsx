import React from 'react';

const TargetRow = ({ icons = [], target, progress }) => {
  // Split icons into rows of 4
  const chunkIcons = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const iconRows = chunkIcons(icons, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {/* Icons Column */}
      <div className="flex flex-col gap-2 min-h-[100px]">
        {iconRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt=""
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Target Column */}
      <div className="bg-white rounded-lg p-4 text-gray-800 shadow-sm border border-gray-200 min-h-[100px]">
        <p className="text-sm leading-relaxed">{target}</p>
      </div>

      {/* Progress Column */}
      <div className="bg-white rounded-lg p-4 text-gray-800 shadow-sm border border-gray-200 min-h-[100px]">
        <p className="text-sm leading-relaxed">{progress}</p>
      </div>
    </div>
  );
};

const Section = ({ title, rows }) => (
  <section className="bg-[#e9f0e6] rounded-2xl p-6 mb-8">
    <h3 className="text-5xl manrope-thin text-[#48893b] mb-6">{title}</h3>

    {/* Column Headings */}
    <div className="hidden md:grid grid-cols-3 font-semibold text-gray-700 mb-2 px-1">
      <div></div>
      <div>Target</div>
      <div>Progress</div>
    </div>

    {rows.map((row, index) => (
      <TargetRow key={index} {...row} />
    ))}
  </section>
);

const SustainabilityTargets = () => {
  return (
    <div className="">
      <h2 className="text-3xl manrope-thin mb-10">Sustainability Targets</h2>

      <Section
        title="Food"
        rows={[
          {
            icons: ['./sustainability/sdg2.svg', './sustainability/sdg12.svg'],
            target: (
              <>
                <strong>100%</strong> food ingredients for Domino’s will be sourced from suppliers working under Global Food Safety Initiative (GFSI) by FY’30.
              </>
            ),
            progress: (
              <>
                <strong>93%</strong> of ingredients manufacturers are certified under GFSI programmes.
              </>
            ),
          },
          {
            icons: [],
            target: 'Domino’s to continue maintaining 6 sigma levels in food safety-related customer complaint.',
            progress: (
                    <>
                      <strong>93%</strong> of ingredients manufacturers are certified under GFSI programmes.
                    </>
              ),
          },
        ]}
      />

      <Section
        title="Planet"
        rows={[
          {
            icons: ['./sustainability/sdg7.svg', './sustainability/sdg12.svg', './sustainability/sdg13.svg'],
            target: (
              <>
                <strong>80%</strong> of our delivery fleet to be electric vehicles by FY’30
              </>
            ),
            progress: (
              <>
                <strong>47%</strong> of our delivery fleet across JFL consists of electric vehicles.
                <br /><br />
                <strong>100%</strong> of the delivery fleet for Popeyes and Hong’s Kitchen are electric vehicles.
              </>
            ),
          },
          {
            icons: [],
            target: (
              <>
                Our commissaries to be 100% water neutral by FY’30.
              </>
            ),
            progress: (
              <>
                Implemented rainwater harvesting structures in our Standard Contractual Clauses.
              </>
            ),
          },
          {
            icons: [],
            target: (
              <>
                <strong>50%</strong> of energy requirement in our commissaries to be sourced from renewable sources by FY’30.
              </>
            ),
            progress: (
              <>
                Our present renewable energy share for SCC’s is <strong>9%</strong>.
                <br /> <br />
                We have signed a power purchase agreement for procuring <strong>~14 million kwh</strong> of renewable energy for Bangalore Food-tech park and Greater Noida commissary.
              </>
            ),
          },
        ]}
      />
    <div className='bg-[#e9f0e6] rounded-2xl'>
      <Section
        title="People"
        rows={[
          {
            icons: [
              './sustainability/sdg2.svg',
              './sustainability/sdg12.svg',
              './sustainability/sdg4.svg',
              './sustainability/sdg3.svg',
              './sustainability/sdg5.svg',
              './sustainability/sdg10.svg',
              './sustainability/sdg1.svg',
              './sustainability/sdg8.svg',
            ],
            target: (
              <>
                <strong>100%</strong>  farm traceability of key ingredients  in our food products at Domino’s, Popeyes and Hong’s Kitchen by FY’30.
              </>
            ),
            progress: (
              <>
                Procuring <strong>100%</strong> traceable oregano, basil and chilli for Dominos.
                <br /><br />
                Procuring <strong>100%</strong> traceable poultry for Domino’s, Hong’s Kitchen and Popeyes, from farms with ‘No Antibiotics Ever’ policy.
              </>
            ),
          },
          {
            icons: [],
            target: (
              <>
                Achieve a gender-diverse workplace through representation of <strong>40%</strong> women in our workforce by FY’30
              </>
            ),
            progress: (
              <>
                Women comprise <strong>34%</strong> of our total workforce, indicating progress towards our goal.
              </>
            ),
          },
        ]}
      />

      <Section
        title="Communities"
        rows={[
            {
                icons: [],
                target: (
                  <>
                    Achieve a <strong>50%</strong> increase (from baseline FY’22) in total training hours by FY’26.
                    
                  </>
                ),
                progress: (
                  <>
                    We over-achieved the training hours target through classroom trainings and additional trainings were added across our flexi and business associates.
                    <br /><br />
                    In FY’24, 274,179 man-hours of training were delivered.
                  </>
                ),
              },
            {
                icons: [],
                target: (
                  <>
                    Around one+ million individuals to be positively impacted through our community outreach engagements by FY’30.
                  </>
                ),
                progress: (
                  <>
                    Positively impacted <strong>569,950</strong>  people in  FY 23-24, through our community outreach engagement, indicating progress towards our goal.
                    <br />
                    <ul className='px-4 my-2 list-disc marker:text-[#2c761c]'>
                    <li><span className='text-[#2c761c] manrope-bold'>Healthcare:</span> Catering to a population of <strong>469,000</strong> people around commissaries, treated more than 107,000 patients.</li>
                    
                    <li><span className='text-[#2c761c] manrope-bold'>Skill Development:</span> Trained <strong>6,600+</strong> candidates from the under-catered areas of the country.</li>
                    
                    <li><span className='text-[#2c761c] manrope-bold'>Dairy Farmer Development:</span> Working with <strong>7,240</strong> farmers.</li>
                    
                    <li><span className='text-[#2c761c] manrope-bold'>Food Safety and Eat right:</span> Trained <strong>5,300</strong> food handlers and spread awareness to <strong>5,000+</strong> citizens through Eat Right mela.</li>
                    </ul>
                  </>
                ),
              },
          
        ]}
      />

      <Section
        title="Governance"
        rows={[
          {
            target: (
                <>
                  Ensure highest level of governance, ethics, transparency and compliance across all operations and geographies.
                </>
              ),
            progress: (
                <>
                  Developed an <strong>e-learning</strong> module on Code of Conduct for mandatory training across JFL.
                </>
              ),
          },
        ]}
      />
      </div>
    </div>
  );
};

export default SustainabilityTargets;

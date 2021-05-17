import React, { useContext } from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { ExampleChart, Pie3D } from './charts';

const Repos = () => {
   //destruture repos array from global state
   const { repos } = useContext(GithubContext);

   const chartData = [
      {
         label: 'HTML',
         value: '25',
      },
      {
         label: 'CSS',
         value: '80',
      },
      {
         label: 'Javascript',
         value: '142',
      },
   ];

   return (
      <section className='section'>
         <Wrapper className='section-center'>
            <Pie3D data={chartData} />
            {/* <ExampleChart data={chartData} />; */}
         </Wrapper>
      </section>
   );
};

const Wrapper = styled.div`
   display: grid;
   justify-items: center;
   gap: 2rem;
   @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
   }

   @media (min-width: 1200px) {
      grid-template-columns: 2fr 3fr;
   }

   div {
      width: 100% !important;
   }
   .fusioncharts-container {
      width: 100% !important;
   }
   svg {
      width: 100% !important;
      border-radius: var(--radius) !important;
   }
`;

export default Repos;

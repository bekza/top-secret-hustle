import React from 'react';
import { Collapse } from 'antd';
import { Col, Row } from 'antd';
import { Divider } from 'antd';

import richDadPoorDadImg from '../assets/richDadPoorDad.jpg';
const { Panel } = Collapse;

const RichDadPoorDad = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '980px',
      }}
    >
      <h2>Rich Dad Poor Dad by Robert T. Kiyosaki</h2>
      <Divider />
      <Row>
        <Col
          xs={{ span: 24 }}
          s={{ span: 8 }}
          md={{ span: 8 }}
          lg={{ span: 7 }}
        >
          <img
            src={richDadPoorDadImg}
            alt=''
            style={{ width: '200px', marginBottom: '10px' }}
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          s={{ span: 16 }}
          md={{ span: 16 }}
          lg={{ span: 17 }}
        >
          <Collapse defaultActiveKey={['1']} bordered={false}>
            <Panel header='The Book in Three Sentences' key='1'>
              <p>
                1. Rich Dad Poor Dad is about Robert Kiyosaki and his two
                dads—his real father (poor dad) and <br />
                the father of his best friend (rich dad)—and the ways
                <br />
                in which both men shaped his thoughts about money and investing.
                <br />
                2. You don’t need to earn a high income to be rich. <br />
                3. Rich people make money work for them.
              </p>
            </Panel>
            <Panel header='The Five Big Ideas' key='2'>
              <p>
                1. The poor and the middle-class work for money. The rich have
                money work for them. <br /> 2. It’s not how much money you make
                that matters. It’s how much money you keep. <br /> 3. Rich
                people acquire assets. The poor and middle class acquire
                liabilities that they think are assets.
                <br /> 4. Financial aptitude is what you do with money once you
                make it, how you keep people from taking it from you, how to
                keep it longer, and how you make money work hard for you. <br />{' '}
                5. The single most powerful asset we all have is our mind.
              </p>
            </Panel>
            <Panel header='Rich Dad Poor Dad Lessons' key='3'>
              <p>
                Lesson 1: The Rich Don’t Work for Money <br />
                Lesson 2: Why Teach Financial Literacy? <br />
                Lesson 3: Mind Your Own Business <br />
                Lesson 4: The History of Taxes and The Power of Corporations{' '}
                <br />
                Lesson 5: The Rich Invent Money <br />
                Lesson 6: Work to Learn—Don’t Work for Money
              </p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
      <Divider />
      <p style={{ marginTop: '30px' }}>
        <b>Rich Dad Poor Dad Summary</b> <br />
        <span>
          “There is a difference between being poor and being broke. Broke is
          temporary. Poor is eternal.”
          <br /> “Money comes and goes, but if you have the education about how
          money works, you gain power over it and can begin building wealth.”
          <br /> “People’s lives are forever controlled by two emotions: fear
          and greed.”
          <br /> “So many people say, ‘Oh, I’m not interested in money.’ Yet
          they’ll work at a job for eight hours a day.”
          <br /> “Thinking that a job makes you secure is lying to yourself.”
          <br />
          “Intelligence solves problems and produces money.”
          <br /> “You must know the difference between an asset and a liability,
          and buy assets.”
          <br /> An asset puts money in your pocket. A liability takes money out
          of your pocket. “Illiteracy, both in words and numbers, is the
          foundation of financial struggle.”
          <br /> “Money often makes obvious our tragic human flaws, putting a
          spotlight on what we don’t know.”
          <br /> “Cash flow tells the story of how a person handles money.”
          <br /> “Most people don’t understand why they struggle financially
          because they don’t understand cash flow.”
          <br /> “The number-one expense for most people is taxes.”
          <br /> Higher incomes cause higher taxes. This is known as “bracket
          creep.”
          <br /> “More money seldom solves someone’s money problems.”
          <br /> “The fear of being different prevents most people from seeking
          new ways to solve their problems.”
          <br />
          “A person can be highly educated, professionally successful, and
          financially illiterate.”
          <br /> “Many financial problems are caused by trying to keep up with
          the Joneses.”
          <br /> Once you understand the difference between assets and
          liabilities, concentrate your efforts on buying income-generating
          assets. “The problem with simply working harder is that each of these
          three levels takes a greater share of your increased efforts. You need
          to learn how to have your increased efforts benefit you and your
          family directly.”
          <br /> “Wealth is a person’s ability to survive so many number of days
          forward—or, if I stopped working today, how long could I survive?”
          “The rich buy assets. The poor only have expenses. The middle class
          buy liabilities they think are assets.”
          <br /> “The rich focus on their asset columns while everyone else
          focuses on their income statements.”
          <br /> “Financial struggle is often directly the result of people
          working all their lives for someone else.”
          <br /> “The mistake in becoming what you study is that too many people
          forget to mind their own business. They spend their lives minding
          someone else’s business and making that person rich.”
          <br /> “To become financially secure, a person needs to mind their own
          business.”
          <br />
          “Financial struggle is often the result of people working all their
          lives for someone else.”
          <br /> “The primary reason the majority of the poor and middle class
          are fiscally conservative—which means, ‘I can’t afford to take
          risks’—is that they have no financial foundation.”
          <br /> “One of the main reasons net worth is not accurate is simply
          because, the moment you begin selling your assets, you are taxed for
          any gains.”
          <br /> “A new car loses nearly 25 percent of the price you pay for it
          the moment you drive it off the lot.”
          <br /> “Keep expenses low, reduce liabilities, and diligently build a
          base of solid assets.”
          <br /> Kiyosaki says he owns business that do not require his
          presence. “If I have to work there, it’s not a business. It becomes my
          job.”
          <br /> According to Kiyosaki, real assets fall into the following
          categories: Stocks Bonds Income-generating real estate Notes (IOUs)
          Royalties from intellectual property such as music, scripts, and
          patents Anything else that has value, produces income or appreciates,
          and has a ready market “For people who hate real estate, they
          shouldn’t buy it.”
          <br /> Kiyosaki generally holds real estate for less than seven years.
          Start minding your own business. Keep your daytime job, but start
          buying real assets, not liabilities. When Kiyosaki says mind your own
          business, he means building and keeping your asset column strong. Once
          a dollar goes into it, never let it come out. “The best thing about
          money is that it works 24 hours a day and can work for generations.”
          <br /> “An important distinction is that rich people buy luxuries
          last, while the poor and middle class tend to buy luxuries first.”
          <br /> “A true luxury is a reward for investing in and developing a
          real asset.”
          <br /> Kiyosaki’s rich dad did not see Robin Hood as a hero. He called
          Robin Hood a crook. “If you work for money, you give the power to your
          employer. If money works for you, you keep the power and control it.”
          <br /> “Each dollar in my asset column was a great employee, working
          hard to make more employees and buy the boss a new Porsche.”
          <br /> Kiyosaki reminds people that financial IQ is made up of
          knowledge from four broad areas of expertise: Accounting Investing
          Understanding markets The law “A corporation earns, spends everything
          it can, and is taxed on anything that is left. It’s one of the biggest
          legal tax loopholes that the rich use.”
          <br /> “Garret Sutton’s books on corporations provide wonderful
          insight into the power of personal corporations.”
          <br /> “Often in the real world, it’s not the smart who get ahead, but
          the bold.”
          <br /> Kiyosaki sees one thing in common in all of us, himself
          included. We all have tremendous potential, and we all are blessed
          with gifts. Yet the one thing that holds all of us back is some degree
          of self-doubt. In Kiyosaki’s personal experience, your financial
          genius requires both technical knowledges as well as courage. Kiyosaki
          always encourages adult students to look at games as reflecting back
          to them what they know and what they need to learn. “Games reflect
          behavior. They are instant feedback systems.”
          <br /> “Financial intelligence is simply having more options.”
          <br /> “The single most powerful asset we all have is our mind. If it
          is trained well, it can create enormous wealth.”
          <br /> “The world is always handing you opportunities of a lifetime,
          every day of your life, but all too often we fail to see them.”
          <br /> Richard uses two main vehicles to achieve financial growth:
          real estate and small-cap stocks. “Simple math and common sense are
          all you need to do well financially.”
          <br /> “The problem with ‘secure’ investments is that they are often
          sanitized, that is, made so safe that the gains are less.”
          <br /> “It is not gambling if you know what you’re doing. It is
          gambling if you’re just throwing money into a deal and praying.”
          <br /> “Most people never get wealthy simply because they are not
          trained financially to recognize opportunities right in front of
          them.”
          <br /> “Great opportunities are not seen with your eyes. They are seen
          with your mind.”
          <br /> “You want to know a little about a lot” was rich dad’s
          suggestion. “Job is an acronym for ‘Just Over Broke.’” “Look down the
          road at what skills they want to acquire before choosing a specific
          profession and before getting trapped in the Rat Race.”
          <br /> “Education is more valuable than money, in the long run.”
          <br /> “The reason so many talented people are poor is because they
          focus on building a better hamburger and know little to nothing about
          business systems.”
          <br /> The main management skills needed for success are: Management
          of cash flow Management of systems Management of people “The most
          important specialized skills are sales and marketing.”
          <br /> “To be truly rich, we need to be able to give as well as to
          receive.”
          <br /> “Giving money is the secret to most great wealthy families.”
          <br /> “The primary difference between a rich person and a poor person
          is how they manage fear.”
          <br /> There are five main reasons why financially literate people may
          still not develop abundant asset columns that could produce a large
          cash flow. The five reasons are: Fear Cynicism Laziness Bad habits
          Arrogance “For most people, the reason they don’t win financially is
          because the pain of losing money is far greater than the joy of being
          rich.”
          <br /> “Failure inspires winners. Failure defeats losers.”
          <br /> “Real estate is a powerful investment tool for anyone seeking
          financial independence or freedom.”
          <br /> “A great property manager is key to success in real estate.”
          <br /> The most common form of laziness is staying busy. “Rich dad
          believed that the words ‘I can’t afford it’ shut down your brain. ‘How
          can I afford it?’ opens up possibilities, excitement, and dreams.”
          <br /> “Whenever you find yourself avoiding something you know you
          should be doing, then the only thing to ask yourself is, ‘What’s in it
          for me?’ Be a little greedy. It’s the best cure for laziness.”
          <br /> Richard has found that many people use arrogance to try to hide
          their own ignorance. “There is gold everywhere. Most people are not
          trained to see it.”
          <br /> “To find million-dollar ‘deals of a lifetime’ requires us to
          call on our financial genius.”
          <br /> A reason or a purpose is a combination of ‘wants’ and ‘don’t
          wants.’” “Most people simply buy investments rather than first
          investing in learning about investing.”
          <br /> Richard believes one of the hardest things about
          wealth-building is to be true to yourself and to be willing to not go
          along with the crowd. “The rich know that savings are only used to
          create more money, not to pay bills.”
          <br /> “The sophisticated investor’s first question is: ‘How fast do I
          get my money back?’” If Richard could leave one single idea with you,
          it is that idea. Whenever you feel short or in need of something, give
          what you want first and it will come back in buckets. In the world of
          accounting, there are three different types of income: Ordinary earned
          Portfolio Passive.
        </span>
      </p>
    </div>
  );
};

export default RichDadPoorDad;

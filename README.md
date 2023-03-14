# Zip Frontend (React) interview

## Overview

Zip is a payment gateway that lets consumers split purchases into 4 interest free installments, every two weeks. The first 25% is taken when the purchase is made, and the remaining 3 installments of 25% are automatically taken every 14 days. We help customers manage their cash-flow while helping merchants increase conversion rates and average order values.

It may help to see our [product in action online](https://www.newegg.com/black-red-blue-nintendo-hadskabaa-switch-console-with-neon-blue-and-neon-red-joy-con/p/N82E16878190842oots) or [android](https://play.google.com/store/apps/details?id=com.quadpay.quadpay&hl=en_US), and to read our documentation (https://docs.us.zip.co).

## Background

One of the cornerstones of Zip's culture is openness and transparency. When reviewing our existing interview structure, we found that pair-programming challenges rarely replicated what our employees actually do in their day-to-day work. For example, when was the last time you coded without google, or when the requirements weren't clearly defined? To tackle that, we've decided to publish our pair programming interview and share it directly with candidates beforehand.

As an Engineer at Zip you’ll help solve interesting problems on a daily basis. Some areas that you'll work on include fraud prevention, building real-time credit-decisioning models and, most importantly, shipping products that are secure, frictionless, and deliver a high-quality consumer experience.

The pair programming challenge will take an hour, and will more closely replicate a day-in-the-life at Zip. You’re free to use whichever resources help you to get the job done. When we evaluate your code at the end of the session, we will be looking for:

- A high code health
- Simplicity
- Readability
- Presence of tests or planning for future tests
- And maintainability

While we mainly use React and React Native in our front-end, we welcome candidates who are more familiar with other frameworks; we also use Vue.js. We ask that you simply confirm your framework of choice with your recruiter beforehand. At the moment, we have only finalized starter code for React, but feel free to look through that to prepare for your assignment even if using another framework.

For the React excercise you will notice that this is very much a bare-bones create-react-app application. `App.tsx` has been only slightly modified to include a basic form for the installments calculator and a prompt. Feel free to change this code in your interview to be whatever you like -- class component, etc.

## The Pair Programming Interview

### The Challenge

During the interview, you will build a core service for our business, an Installment Calculator. There is no need to build anything before the interview, but feel free to investigate the boilerplate code and do some research on how you would set this up.

#### Installment Calculator

##### User Story

As a Zip Customer, I would like to establish a payment plan spread over 6 weeks that splits the original charge evenly over 4 installments.

##### Acceptance Criteria

- When I submit an input of $94.00
- Then I should see a UI displaying these 4 installments

Note: Dates can be hardcoded for this exercise
![Payments](payments.png?raw=true 'Payments')

## Closing Thoughts

We very much look forward to meeting you. Our goal is to make interviewers feel comfortable and prepared, so always feel free to reach out to your recruiter if you have any questions. Afterward, we welcome any and all feedback. We're constantly iterating and improving this process, and anything you share will help us make our interviews better for future candidates.

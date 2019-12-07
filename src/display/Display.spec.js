// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import Display from './Display.js';



test("display closed if the closed prop is true", () => {
    const wrapper = rtl.render(<Display closed={true}/>);

    expect(wrapper.getByText(/closed/i))
})

test("display locked if the locked prop is true", () => {
    const wrapper = rtl.render(<Display locked={true}/>);

    expect(wrapper.getByText(/locked/i))
})

// test("when locked or closed use red-led class", () => {
//     const wrapper = rtl.render(<Display locked={true} closed={false}/>);

//     expect(wrapper.getAllByTestId("led red-led"))
// }) 

// test("when closed use red-led class", () => {
//     const wrapper = rtl.render(<Display locked={false} closed={true}/>);

//     expect(wrapper.getAllByTestId("led red-led"))
// }) 

// test("when unlocked or open use green-led class", () => {
//     const wrapper = rtl.render(<Display locked={true} closed={false}/>);

//     expect(wrapper.getAllByTestId("led green-led"))
// })

// test("when unlocked or open use green-led class", () => {
//     const wrapper = rtl.render(<Display locked={false} closed={true}/>);

//     expect(wrapper.getAllByTestId("led green-led"))
// })
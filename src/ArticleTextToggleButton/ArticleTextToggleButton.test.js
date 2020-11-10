import React from "react";
import ArticleTextToggleButton from"./ArticleTextToggleButton";
import {fireEvent} from "@testing-library/react";

describe ("ArticleTextToggleButton tests",()=>{
    it("renders correctly show less", ()=>{
        const{container}=render(<ArticleTextToggleButton buttonText={"Show less"}/>);
        expect(container).toMatchSnapshot();
    })
    it("renders correctly show more", ()=>{
        const{container}=render(<ArticleTextToggleButton buttonText={"Show more"}/>);
        expect(container).toMatchSnapshot();
    })
    it("renders correctly after button is clicked", () => {
    
        const { container,getByText} = render(
            <ArticleTextToggleButton buttonText={"Show more"}/>
          );
          const button = getByText("Show more");
          fireEvent.click(button);
          expect(container).toMatchSnapshot();
    });
});




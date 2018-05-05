import React, { Component } from 'react';
import { Container, H1, H3 } from "theme/grid";
import { hot } from "react-hot-loader";

class FAQ extends Component {
    render() {
        return (
            <Container>
                <H1>Frequency asked questions</H1>
                <H3 align={"center"}>We all like efficiency, so you are welcome to read this FAQ before you decide to email me.</H3>

                <h2>Do you want to go out for a coffee, just so we can talk about success, networking and books?</h2>
                <p>Absolutely! I am always open to meeting new open-minded people with similar interests.</p>

                <h2>Are you completely self-taught?</h2>
                <p>Practically, yes. I have done some mathematical programming in university, but everything else - it's all me.</p>

                <h2>Are you looking for a full-time job?</h2>
                <p>Currently no -  I am working with Airbyte and I am very happy with the company and my position. But I am always open to new ideas - so don't be afraid to email me with yours.</p>
                <p>I also have this thing called university, which I have to complete. Graduating in summer of 2019 and then I am a free person.</p>

                <h2>I have a video project that I need help with. Are you down to assist me?</h2>
                <p>Yes.</p>
            </Container>
        );
    }
}

export default hot(module)(FAQ);
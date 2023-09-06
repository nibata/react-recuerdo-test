import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";
import 'semantic-ui-css/semantic.min.css'

import Header from "./components/Header";
import Users from "./components/Users";
import ButtonExampleEmphasis from "./components/ExampleSemantic"
import ButtonExampleAnimated from "./components/ExampleSemantic2"
import PlotExamplePlotly from "./components/ExamplePlotly"
import PlotExamplePlotly2 from "./components/ExamplePlotly2"
import SidebarExampleSidebar from "./components/ExampleSemanticSidebar";

function App() {
    return (
        <ChakraProvider>
            <Header title={"HOLAAAA"}/>
            <SidebarExampleSidebar />
            <Users />
            <ButtonExampleEmphasis />
            <ButtonExampleAnimated />
            <PlotExamplePlotly />
            <PlotExamplePlotly2 />
        </ChakraProvider>

    )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
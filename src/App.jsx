import "./App.css";
import styled from "styled-components";
import IntroSection from "./components/IntroSection";
import RisksSection from "./components/RisksSection";
import PolycrisisSection from "./components/PolycrisisSection";
import NexusInActionSection from "./components/NexusInActionSection";
import RiskPerceptionsSection from "./components/RiskPerceptionsSection";
import PreparingForComplexitySection from "./components/PreparingForComplexitySection";
import CollaborativeApproachSection from "./components/CollaborativeApproachSection";
import SectionMenu from "./components/SectionMenu";

const AppContainer = styled.div``;

function App() {
    return (
        <AppContainer>
            <SectionMenu />
            <IntroSection />
            <RisksSection backgroundColor="#f2f0ea" />
            <PolycrisisSection backgroundColor="#b6c1d3" />
            <NexusInActionSection backgroundColor="#fde432" />
            <RiskPerceptionsSection backgroundColor="#ed5027" />
            <PreparingForComplexitySection backgroundColor="#d7d7d7" />
            <CollaborativeApproachSection backgroundColor="#f0eedf" />
        </AppContainer>
    );
}

export default App;

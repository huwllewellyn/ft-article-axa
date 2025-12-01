import "./App.css";
import styled from "styled-components";
import IntroSection from "./components/IntroSection";
import RisksSection from "./components/RisksSection";
import PolycrisisSection from "./components/PolycrisisSection";
import NexusInActionSection from "./components/NexusInActionSection";
import RiskPerceptionsSection from "./components/RiskPerceptionsSection";
import PreparingForComplexitySection from "./components/PreparingForComplexitySection";
import CollaborativeApproachSection from "./components/CollaborativeApproachSection";

const AppContainer = styled.div``;


function App() {
    return (
        <AppContainer>
            <IntroSection />
            <RisksSection />
            <PolycrisisSection />
            <NexusInActionSection />
            <RiskPerceptionsSection />
            <PreparingForComplexitySection />
            <CollaborativeApproachSection />
        </AppContainer>
    );
}

export default App;

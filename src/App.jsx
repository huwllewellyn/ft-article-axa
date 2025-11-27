import "./App.css";
import IntroSection from "./components/IntroSection";
import RisksSection from "./components/RisksSection";
import VizSection from "./components/VizSection";
import PolycrisisSection from "./components/PolycrisisSection";
import NexusInActionSection from "./components/NexusInActionSection";
import RiskPerceptionsSection from "./components/RiskPerceptionsSection";
import PreparingForComplexitySection from "./components/PreparingForComplexitySection";
import CollaborativeApproachSection from "./components/CollaborativeApproachSection";

function App() {
    return (
        <>
            <IntroSection />
            <RisksSection />
            <PolycrisisSection />
            <NexusInActionSection />
            <RiskPerceptionsSection />
            <PreparingForComplexitySection />
            <CollaborativeApproachSection />
        </>
    );
}

export default App;

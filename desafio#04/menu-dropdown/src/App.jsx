import { useState } from "react";
import { MainNavbarLinkList } from "./components";

export default function App() {
  const [applications, setApplications] = useState(false);
  const [builds, setBuilds] = useState(false);
  const [resources, setResources] = useState(false);

  const hideDropdownList = () => {
    setApplications(false);
    setBuilds(false);
    setResources(false);
  }
  return (
    <>
      <nav className="main-navbar">
        <MainNavbarLinkList
          applications={applications}
          builds={builds}
          resources={resources}
          setApplications={setApplications}
          setBuilds={setBuilds}
          setResources={setResources}
        />
      </nav>
      <header className="main-header"></header>
      <main className="main-content" onClick={hideDropdownList}></main>
    </>
  );
}




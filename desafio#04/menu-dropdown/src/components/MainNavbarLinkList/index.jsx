import {
  MainNavbarLinkListItem,
  NavbarLinkListDropdownItem,
  PiGauge,
  PiStack,
  PiNoteBlank,
  GrStorage,
  FaWatchmanMonitoring,
  FaCubes,
  TiHome
} from "../index";
import PropTypes from "prop-types";

export default function MainNavbarLinkList({
  applications,
  builds,
  resources,
  setApplications,
  setBuilds,
  setResources,
}) {
  const dropDown = (e) => {
    setApplications(false);
    setBuilds(false);
    setResources(false);

    const dropdownItem = e.currentTarget.getAttribute("name");

    switch (dropdownItem) {
      case "applications":
        applications ? setApplications(false) : setApplications(true);
        break;
      case "builds":
        builds ? setBuilds(false) : setBuilds(true);
        break;
      case "resources":
        resources ? setResources(false) : setResources(true);
        break;
    }
  };

  return (
    <ul className="main-navbar-link-list">
      <MainNavbarLinkListItem lbl="Home" selected={false}>
        <TiHome className="navigation-icon-container__icon icon--color" />
      </MainNavbarLinkListItem>

      <MainNavbarLinkListItem lbl="Overview" selected={false}>
        <PiGauge className="navigation-icon-container__icon icon--color" />
      </MainNavbarLinkListItem>

      <NavbarLinkListDropdownItem
        dropDown={dropDown}
        condition={applications}
        name="applications"
      >
        <FaCubes className="navigation-icon-container__icon icon--color" />
      </NavbarLinkListDropdownItem>

      <NavbarLinkListDropdownItem
        dropDown={dropDown}
        condition={builds}
        name="builds"
      >
        <PiStack className="navigation-icon-container__icon icon--color" />
      </NavbarLinkListDropdownItem>

      <NavbarLinkListDropdownItem
        dropDown={dropDown}
        condition={resources}
        name="resources"
      >
        <PiNoteBlank className="navigation-icon-container__icon icon--color" />
      </NavbarLinkListDropdownItem>

      <MainNavbarLinkListItem lbl="Storage" selected={true}>
        <GrStorage className="navigation-icon-container__icon icon--color" />
      </MainNavbarLinkListItem>

      <MainNavbarLinkListItem lbl="Monitoring" selected={false}>
        <FaWatchmanMonitoring className="navigation-icon-container__icon icon--color" />
      </MainNavbarLinkListItem>
    </ul>
  );
}

MainNavbarLinkList.propTypes = {
  applications: PropTypes.bool,
  builds: PropTypes.bool,
  resources: PropTypes.bool,
  setApplications: PropTypes.func,
  setBuilds: PropTypes.func,
  setResources: PropTypes.func,
};

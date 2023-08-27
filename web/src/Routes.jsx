// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/speakef-filter" page={SpeakefFilterPage} name="speakefFilter" />
      <Set wrap={ScaffoldLayout} title="Speakers" titleTo="speakers" buttonLabel="New Speaker" buttonTo="newSpeaker">
        <Route path="/speakers/new" page={SpeakerNewSpeakerPage} name="newSpeaker" />
        <Route path="/speakers/{id:Int}/edit" page={SpeakerEditSpeakerPage} name="editSpeaker" />
        <Route path="/speakers/{id:Int}" page={SpeakerSpeakerPage} name="speaker" />
        <Route path="/speakers" page={SpeakerSpeakersPage} name="speakers" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Meatings" titleTo="meatings" buttonLabel="New Meating" buttonTo="newMeating">
        <Route path="/meatings/new" page={MeatingNewMeatingPage} name="newMeating" />
        <Route path="/meatings/{id:Int}/edit" page={MeatingEditMeatingPage} name="editMeating" />
        <Route path="/meatings/{id:Int}" page={MeatingMeatingPage} name="meating" />
        <Route path="/meatings" page={MeatingMeatingsPage} name="meatings" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

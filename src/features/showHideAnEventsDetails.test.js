import { loadFeature, defineFeature } from "jest-cucumber";
import Event from '../Event';
import EventList from "../EventList";
import { mockData } from "../mock-data";
import { shallow } from 'enzyme';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed.', ({ given, when, then }) => {
        given('user hasn’t searched for any city or has searched for a city', () => {

        });

        let EventListWrapper;
        when('the user opens the app or selects a city', () => {
            EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find('.EventList')).toHaveLength(1);
        });

        let EventWrapper;
        then('all the event elements should seen collapsed by the user', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            expect(EventWrapper.state('collapsed')).toEqual(true);
        });
    });


    test('User can expand an event to see its details.', ({ given, when, then }) => {
        given('user is interested in an event', () => {

        });

        let EventWrapper;
        when('user clicks on the event or a button', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            EventWrapper.find('#eventButton').simulate("click");
        });

        then('the user should see the details of the selected event', () => {
            expect(EventWrapper.state('collapsed')).toEqual(false);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('user got the wanted information', () => {

        });

        let EventWrapper;
        when('user clicks on a button or outside the event element', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            EventWrapper.setState({ collapsed: false})
            EventWrapper.find('#eventButton').simulate('click');
        });

        then('the event element should collapse', () => {
            expect(EventWrapper.state('collapsed')).toEqual(true);
        });
    });
});
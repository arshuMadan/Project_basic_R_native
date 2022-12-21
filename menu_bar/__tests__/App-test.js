
import React from 'react';
import ButtonTwo from '../src2/login/buttons/button2'
import renderer from 'react-test-renderer';
import axiosMock from 'axios';
import moxios from 'moxios'
import Body from '../src2/home/body/index.js'



const createTestProps = props => ({
    navigation: {
        navigate: jest.fn(),
        state: jest.fn(),
    },
    ...props,
});
const VerifyEmailResponse = {}
describe('VerifyEmail Screen component Unit Testing', () => {
     
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });
    props = createTestProps({});

  it('user pass email', (done) => {
      const component = renderer.create(<ButtonTwo {...props} />).getInstance();
      component.validation();
      moxios.stubRequest('https://qa.faveodemo.com/deepaktest/public/v3/api/login', {
          status: 200,
          response: 'VerifyEmailResponse',
      });

      setTimeout(() => {
        expect(moxios.requests.mostRecent().url).toBe(
          'https://qa.faveodemo.com/deepaktest/public/v3/api/login',
      );
      expect(component.state.emailValue).toEqual(undefined);
      expect(component.state.passValue).toEqual(undefined);
      
      done();
      }, 1);
  });

  it('when the network is not working then catch the responces error ', (done) => {
    const component = renderer.create(<ButtonTwo {...props} />).getInstance();
    component.validation();
     moxios.stubRequest('https://qa.faveodemo.com/deepaktest/public/v3/api/login', {
         status: 400,
         response: { AxiosError: 'Network Error' },
     });

     setTimeout(() => {
         expect(moxios.requests.mostRecent().url).toBe(
             'https://qa.faveodemo.com/deepaktest/public/v3/api/login',
         );
         expect(component.state.emailValue).toEqual(undefined);
         expect(component.state.passValue).toEqual(undefined);
         done();
     }, 1);
    
  });


  })

  describe('Home Screen Api Unit Testing', () => {
     
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });
    props = createTestProps({});

  it('requesting Api', (done) => {
      const component = renderer.create(<Body {...props} />).getInstance();
      component.getData();
      moxios.stubRequest('https://jsonplaceholder.typicode.com/users', {
          status: 200,
          response: '',
      });
      setTimeout(() => {
        expect(moxios.requests.mostRecent().url).toBe(
          'https://jsonplaceholder.typicode.com/users',
      );
      expect(component.state.data).toEqual([])
      
      done();
      }, 1);
  });

  it('when the network is not working then catch the responces error ', (done) => {
    const component = renderer.create(<Body {...props} />).getInstance();
    component.getData();
     moxios.stubRequest('https://jsonplaceholder.typicode.com/users', {
         status: 400,
         response: { AxiosError: 'Request failed with status code 404 '},
     });

     setTimeout(() => {
         expect(moxios.requests.mostRecent().url).toBe(
             'https://jsonplaceholder.typicode.com/users',
         );
         expect(component.state.responseError).toEqual('')
         done();
     }, 1);
    
  });


  })
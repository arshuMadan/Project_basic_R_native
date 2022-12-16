
import React from 'react';
import VerifyEmail from '../src2/rough/verify.js';
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
      const component = renderer.create(<VerifyEmail {...props} />).getInstance();
      component.resendActiveLink();
      moxios.stubRequest('https://qa.faveodemo.com/deepaktest/public/v3/api/login', {
          status: 200,
          response: VerifyEmailResponse,
      });
      setTimeout(() => {
        expect(moxios.requests.mostRecent().url).toBe(
          'https://qa.faveodemo.com/deepaktest/public/v3/api/login',
      );
      expect(component.state.responseMessage).toEqual({});
      expect(component.state.emailValue).toEqual('');
      expect(component.state.passValue).toEqual('');
      
      done();
      }, 1);
  });

  it('when the network is not working then catch the responces error ', (done) => {
    const component = renderer.create(<VerifyEmail {...props} />).getInstance();
    component.resendActiveLink();
     moxios.stubRequest('https://qa.faveodemo.com/deepaktest/public/v3/api/login', {
         status: 400,
         response: { AxiosError: 'Network Error' },
     });

     setTimeout(() => {
         expect(moxios.requests.mostRecent().url).toBe(
             'https://qa.faveodemo.com/deepaktest/public/v3/api/login',
         );
         expect(component.state.responseError).toEqual('');
         expect(component.state.emailValue).toEqual('');
         expect(component.state.passValue).toEqual('');
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
    it('resendActiveLink navigation method', (done) => {
        const component = renderer.create(<Body {...props} />).getInstance();
        component.getData();
        setTimeout(() => {
            expect(props.navigation.navigate).toHaveBeenCalledWith('Home');
            done();
        }, 1);
    });

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
import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Analytics from '../index';

describe('Full DOM Rendering', () => {

  it('allows us to set props', () => {
      const wrapper = mount(<Analytics analytics_key='somerandomstring' />);
      expect(wrapper.props().analytics_key).to.equal('somerandomstring');
      // wrapper.setProps({ bar: 'foo' });
      // expect(wrapper.props().bar).to.equal('foo');
  });

  it('calls componentDidMount', () => {
      sinon.spy(Analytics.prototype, 'componentDidMount');
      const wrapper = mount(<Analytics />);
      expect(Analytics.prototype.componentDidMount.calledOnce).to.be.true;
      Analytics.prototype.componentDidMount.restore();
  });

});


import {
  match,
  not,
  gte,
  and
} from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  message: '',

  isEmail: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte('message.length', 5),
  isValid: and('isEmail', 'isLongEnough'),
  isDisabled: not('isValid'),

  actions: {

    saveMessage() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We got your message and we'll get in touch soon.`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});

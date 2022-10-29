import {createApp} from 'vue'
import {LoadingPlugin} from '../src/index';

describe('Loading plugin', () => {

  test('works as plugin', (done) => {

    const app = createApp({
      render() {
        return null
      },
      async created() {
        let loader = this.$loading.show();
        await this.$nextTick();

        expect(document.body.querySelectorAll('.vl-overlay').length).toEqual(1);
        loader.hide();

        done();
      }
    });

    app.use(LoadingPlugin);
    app.mount('body')
  });

});


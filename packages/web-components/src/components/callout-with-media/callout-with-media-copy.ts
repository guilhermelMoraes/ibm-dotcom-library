/**
 * @license
 *
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { css, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import DDSContentBlockCopy from '../content-block/content-block-copy';
import styles from './callout-with-media.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The copy content of callout with media.
 *
 * @element dds-callout-with-media-copy
 */
@customElement(`${ddsPrefix}-callout-with-media-copy`)
class DDSCalloutWithMediaCopy extends DDSContentBlockCopy {
  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`${super.styles}${styles}`;
  }
}

export default DDSCalloutWithMediaCopy;
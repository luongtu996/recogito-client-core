import React from 'react';
import i18n from '../i18n';
import {HighlightIcon, NoteIcon, TrashIcon} from "../Icons";

const AnnotationTypeSelector = ({
  element,
  dragged,
  setAnnotationType,
  onHighlight
}) => (
  <div ref={element} className={dragged ? 'r6o-editor dragged highlight-edit' : 'r6o-editor highlight-edit'} style={{ width: 'auto' }}>
      <div className="r6o-arrow" />
      <div className="hh-annotation-selector">
          <button
              className="hh-btn"
              onClick={onHighlight}
          >
              <HighlightIcon width={12} />
              {i18n.t('Highlight')}
          </button>
          <div className="hh-split"></div>
          <button
              className="hh-btn"
              onClick={() => {
                  setAnnotationType('note');
              }}
          >
              <NoteIcon width={12} />
              {i18n.t('Note')}
          </button>
      </div>
  </div>
);

export default AnnotationTypeSelector;

import React, { useEffect } from 'react';

export const TAGS = [
  { value: 'Good Points', label: 'Good Points' },
  { value: 'To Improve', label: 'To Improve' },
];

const TagSelect = props => {
  const options = props.select_tags && props.select_tags.length > 0 ?
    props.select_tags :
    TAGS;

  // Set default value for selectedOption
  const selectedOption = props.content
    ? options.find(p => p.value === props.content)
    : options[0];

  useEffect(() => {
    if (!props.content && options[0] && typeof props.onChange === 'function') {
      props.onChange(options[0].value);
    }
    // Only run when options or content changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, props.content]);

  return (
    <div className="r6o-select-tag">
      <select
        value={selectedOption ? selectedOption.value : ''}
        onChange={props.onChange}
        disabled={!props.editable}
        className="r6o-select"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default TagSelect;

import s from './ColorPicker.module.css';
console.log(s);

function ColorPicker({ options }) {
  return (
    <div className={s.conteiner}>
      <h2 className={s.title}>Color Picker</h2>
      <div>
        {options.map(op => (
          <span
            key={op.label}
            className={s.option}
            style={{ backgroundColor: op.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;

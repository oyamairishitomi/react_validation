import { useForm } from "./hooks/useForm";
import { useToggle } from "./hooks/useToggle";

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "名前は必須です";
  }

  if (!values.email.includes("@")) {
    errors.email = "メールアドレスの形式が正しくありません";
  }

  if (values.password.length < 6) {
    errors.password = "パスワードは６文字以上です";
  }

  return errors;
}

function App() {
  const [values, errors, handleChange] = useForm(
    { name: "", email: "", password: "" },
    validate,
  );
  const [showPassword, toggle] = useToggle(false);

  return (
    <div>
      <div>
        名前：
        <input name="name" value={values.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        メール：
        <input name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        パスワード：
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
        />
        <button type="button" onClick={toggle}>
          {showPassword ? "隠す" : "表示"}
        </button>
        {errors.password && <p>{errors.password}</p>}
      </div>
    </div>
  );
}

export default App;

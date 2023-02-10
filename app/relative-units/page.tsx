export default function RelativeUnits() {
  return (
    <div className="container">
      <ul>
        <li className="text-[2rem]">
          The font size is <pre className="inline">2rem</pre>
        </li>
        <li className="text-[32px]">
          The font size is <pre className="inline">32px</pre>
        </li>

        <li className="text-[1rlh] bg-[red] h-[1rlh]]">
          The font size is <pre className="inline">1rlh</pre>
        </li>
        <li className="text-[2rex] line-through">
          The font size is <pre className="inline">2rex</pre>
        </li>
      </ul>

    </div>
  );
}

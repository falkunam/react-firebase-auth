import { useState } from "react";
import { firebaseConfigSnippet, signInSnippet } from "./codeSnippet";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState<string>('#introduction');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="container mx-auto p-8 flex">
      <div className="w-1/5 bg-gray-100 p-4 fixed h-full">
        <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
        <nav>
          <ul>
            <li className={`mb-2 ${activeTab === '#introduction' ? 'bg-blue-200' : ''}`}>
              <a href="#introduction" onClick={() => handleTabClick('#introduction')}>Introduction</a>
            </li>
            <li className={`mb-2 ${activeTab === '#installation' ? 'bg-blue-200' : ''}`}>
              <a href="#installation" onClick={() => handleTabClick('#installation')}>Installation</a>
            </li>
            <li className={`mb-2 ${activeTab === '#firebase' ? 'bg-blue-200' : ''}`}>
              <a href="#firebase" onClick={() => handleTabClick('#firebase')}>Firebase</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-3/4 ml-auto p-4">
        <h1 className="text-3xl font-bold mb-6" id="introduction">Firebase Authentication in React</h1>

        <h2 className="text-2xl font-semibold mb-4" id="installation">Step 1: Initialize Firebase</h2>
        <p className="mb-4">Create a <code>firebase.js</code> file in your <code>src</code> directory and initialize Firebase:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{firebaseConfigSnippet}</code>
        </pre>
        <button
          onClick={() => copyToClipboard(firebaseConfigSnippet)}
          className="bg-blue-500 text-white p-2 rounded mb-8"
        >
          Copy code
        </button>

        <h2 className="text-2xl font-semibold mb-4" id="firebase">Step 2: Create Authentication Components</h2>

        <h3 className="text-xl font-semibold mb-4">Sign In Component</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{signInSnippet}</code>
        </pre>
        <button
          onClick={() => copyToClipboard(signInSnippet)}
          className="bg-blue-500 text-white p-2 rounded mb-8"
        >
          Copy code
        </button>
      </div>
    </div>
  );
}

export default Documentation;

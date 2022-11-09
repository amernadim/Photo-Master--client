import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="bg-gray-800 text-gray-100 mt-[90px] py-20">
      <title>Blog - Photo Master</title>
      {/* Ques 1 */}
    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Nov 9, 2022</span>
        <Link rel="noopener noreferrer" to="#" className="px-2 py-1 font-bold rounded bg-orange-500 text-base-100">SQL Vs NoSQL</Link>
      </div>
      <div className="mt-3">
        <Link rel="noopener noreferrer" to="#" className="text-2xl font-bold hover:underline">Difference between SQL and NoSQL</Link>
        <p className="mt-2">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
      </div>
    </div>

     {/* Ques 2 */}
    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900 mt-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Nov 9, 2022</span>
        <Link rel="noopener noreferrer" to="#" className="px-2 py-1 font-bold rounded bg-orange-500 text-base-100">JSON web token</Link>
      </div>
      <div className="mt-3">
        <Link rel="noopener noreferrer" to="#" className="text-2xl font-bold hover:underline">What is jwt, and how does it work?</Link>
        <p className="mt-2">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. <br />
        
        (How JWT Works.) <br />
        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
      </div>
    </div>

      {/* Ques 3 */}
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900 mt-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Nov 10, 2022</span>
        <Link rel="noopener noreferrer" to="#" className="px-2 py-1 font-bold rounded bg-orange-500 text-base-100">Js Vs Node</Link>
      </div>
      <div className="mt-3">
        <Link rel="noopener noreferrer" to="#" className="text-2xl font-bold hover:underline">What is the difference between Javascript and NodeJs ?</Link>
        <p className="mt-2">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
      </div>
    </div>

      {/* Ques 4 */}
      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-900 mt-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Nov 10, 2022</span>
        <Link rel="noopener noreferrer" to="#" className="px-2 py-1 font-bold rounded bg-orange-500 text-base-100">NodeJS</Link>
      </div>
      <div className="mt-3">
        <Link rel="noopener noreferrer" to="#" className="text-2xl font-bold hover:underline">How does Nodejs handle multiple request at the same time ?</Link>
        <p className="mt-2"> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
      </div>
    </div>


  </div>
  );
};

export default Blog;

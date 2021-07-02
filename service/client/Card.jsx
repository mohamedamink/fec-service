import React from "react";
import axios from "axios";

class Card extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = { 

       };
    }
  
  
    render() {
      return (
        
      <div className="rounded overflow-hidden shadow-lg " style={{ padding: 8}}>
        
      <img className="w 500" src={this.props.photo} alt="Mountain" />
      <div className="px-6 py-4">
        
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
      </div>


      <div className="px-6 pt-4 pb-2">
      <span className="flex">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-teal-600">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-teal-600">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-teal-600">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-teal-600">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 text-gray-200">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
      </div>
    </div>



    // <div>
    //     <section className="w-screen h-screen flex justify-center px-2">
    //        <div className=" ">

    //       <div className="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
    //         <div >
    //           <img className="w 500" src={this.props.photo} alt="Mountain" />
    //         </div>
    //         <div className="p-3 space-y-3">
    //           <h5  className="text-sm text-gray-900 leading-sm">
    //             Nepal Mountain
    //           </h5>
    //           <p  className="text-gray-700 font-semibold text-md">
    //           name: {this.props.name}
    //           </p>
    //           <p>
    //             {/*  */}
    //           </p>
    //         </div>
    //         {/* <button className="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500">
    //           <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 mr-1 text-white">
    //             <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd" />
    //             <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg>reservation
    //         </button> */}
    //       </div>
    //       </div>
    //     </section>
    //   </div>

      );
    }
  }

  export default Card;
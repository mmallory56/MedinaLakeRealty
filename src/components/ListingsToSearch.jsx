import React, { useState,useEffect } from "react"
import MapComponent from './MapComponent'
import * as JsSearch from "js-search"
import LargeListingCard from "./LargeListingCard";
import SearchBar from "./SearchBar";


export const ListingsToSearch = ({data,startSearch}) => {
const [search, setSearch]= useState();
const [searchQuery,setSearchQuery]=useState(startSearch)
const [searchResult, setSearchResult]=useState(data.nodes);

const rebuildIndex = () => {
        const  Listing  = data.nodes
        const dataToSearch = new JsSearch.Search("address")
        /**
         * defines an indexing strategy for the data
         * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
         */
        dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
        /**
         * defines the sanitizer for the search
         * to prevent some of the words from being excluded
         *
         */
        dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
        /**
         * defines the search index
         * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
         */
        dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex()
    
        dataToSearch.addIndex("Title") // sets the index attribute for the data
        dataToSearch.addIndex("address") // sets the index attribute for the data
        dataToSearch.addIndex("LongDescription");
        dataToSearch.addIndex("type")
        dataToSearch.addDocuments(Listing) // adds the data to be searched
        
            setSearch(dataToSearch);
            
      }
useEffect(() => {
  rebuildIndex();
 
  
  if(search){
    if(startSearch!=""){
       setSearchQuery(startSearch)
    setSearchResult(search.search(startSearch))
    }
   else setSearchResult(data.nodes)
  }
  
  

  return () => {
    
  }
},[startSearch])

   
     const searchData = e => {
      pulldata(e.target.value)
       
      }
      const pulldata = searchValue=>{
        const queryResult = search.search(searchValue)
        setSearchQuery(searchValue);
        if(searchValue==="")
        setSearchResult(data.nodes);
        else
        setSearchResult(queryResult);
      }
  const markers =  searchResult.map((item)=>
  {
    const lat = item.LocationLatitude;
    const lng = item.LocationLongitute;

    return {lat,lng}
  });
    
    
  return (<>
  <MapComponent markers={markers}></MapComponent>
  <SearchBar value={searchQuery} onChange={searchData}/>
    
  {searchResult.map(item=>
      {
        return <LargeListingCard key={item.id} data={item}/>
      })}
  </>
  )
}

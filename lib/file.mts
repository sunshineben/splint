state file
   context reference FILE *
   oneof unopen, open
   annotations
      open ==> open
      closed ==> unopen

   merge
      open + unopen ==> error "files merge in inconsistent state"
      unopen + open ==> error "files merge in inconsistent state"

   transfers
      open as unopen ==> error "open file passed as unopen"
      unopen as open ==> error "unopen file passed as open"

   losereference
      open ==> error "open file not closed"

   defaults 
      parameter ==> open

end



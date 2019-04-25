select * from things_things
where thing_id in (select person_id
                    from persons
                    where person_id = 1)
                    


select * from things
join persons on persons.person_id = things.person_id

alter table persons
add column last_name varchar
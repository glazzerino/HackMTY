using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class SimulationBehavior : MonoBehaviour
{
    private NavMeshAgent navAgent;
    private GameObject exit;
    private GameObject person;
    private GameObject[] exitTag;
    private GameObject[] personTag;
    private float closestPerson = Mathf.Infinity;

    public float socialDistancing;
    InputData dataScript;

    void Start()
    {
        exitTag = GameObject.FindGameObjectsWithTag("Exit");
        personTag = GameObject.FindGameObjectsWithTag("Person");
        navAgent = this.GetComponent<NavMeshAgent>();
        //dataScript = GetComponent<>();
    }

    void Update()
    {
        FindPerson();
        Debug.DrawLine(transform.position, person.transform.position, Color.red);
        //Debug.Log(closestPerson / 3);
        if (Input.GetKeyDown(KeyCode.E))
        {
            FindExit();
        }
        if(navAgent.SetDestination(exit.transform.position) == true)
        {
            MoveToExit();
        }
        
    }

    public GameObject FindExit()
    {
        Vector3 position = transform.position;
        float distance = Mathf.Infinity;

        foreach(GameObject posExit in exitTag)
        {
            Vector3 difference = posExit.transform.position - position;
            float currentDistance = difference.sqrMagnitude;

            if(currentDistance < distance)
            {
                exit = posExit;
                distance = currentDistance;
            }
        }
        Debug.DrawLine(transform.position, exit.transform.position, Color.blue);
        return exit;
    }

    public void MoveToExit()
    {
        if (closestPerson <= socialDistancing)
        {
            Debug.Log(closestPerson);
            navAgent.isStopped = true;
        }
        else
        {
            navAgent.isStopped = false;
        }

        float dist = Vector3.Distance(exit.transform.position, transform.position);
        Debug.Log(dist);
        if(dist < 0.4f)
        {
            Destroy(gameObject);
        }
    }

    GameObject FindPerson()
    {
        Vector3 position = transform.position;
        closestPerson = Mathf.Infinity;
        foreach (GameObject p in personTag)
        {
            if(p == this.gameObject)
            {
                continue;
            }

            Vector3 difference = p.transform.position - position;
            float currentDistance = difference.sqrMagnitude;
            
            if (currentDistance < closestPerson)
            {
                person = p;
                closestPerson = currentDistance;
            }
            
        }
        return person;
    }
}
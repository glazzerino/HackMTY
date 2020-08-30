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
    public float socialDistance;

    void Start()
    {
        exitTag = GameObject.FindGameObjectsWithTag("Exit");
        personTag = GameObject.FindGameObjectsWithTag("Person");
        navAgent = this.GetComponent<NavMeshAgent>();
    }

    void Update()
    {
        FindPerson();
        if(Input.GetKeyDown(KeyCode.E))
        {
            FindExit();
        }
    }

    GameObject FindExit()
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
        navAgent.SetDestination(exit.transform.position);
        return exit;
    }

    void FindPerson()
    {
        Vector3 position = transform.position;
        float distance = Mathf.Infinity;

        foreach (GameObject p in personTag)
        {
            Vector3 difference = p.transform.position - position;
            float currentDistance = difference.sqrMagnitude;
            Debug.DrawLine(transform.position, p.transform.position, Color.red);
            if (currentDistance < distance)
            {
                distance = currentDistance;
            }
            Debug.Log(distance / 3);
        }
    }
}